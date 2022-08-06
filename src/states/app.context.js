import React, { createContext, useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import { io } from 'socket.io-client';
import { myProfile, updateProfile } from "../api";

const socket = io('https://warm-wildwood-81069.herokuapp.com');

// const { createContext, useState, useEffect } = require("react");

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  const onStart = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        myVideo.current.srcObject = currentStream;
      });
  }

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  const context = {
    user,
    setUser,
    call,
    callAccepted,
    myVideo,
    userVideo,
    stream,
    name,
    setName,
    onStart,
    callEnded,
    me,
    callUser,
    leaveCall,
    answerCall
  };

  const loadUserData = async () => {
    const token = localStorage.getItem("token");
    socket.on('me', (id) => setMe(id));

    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
    if (token) {
      const res = await myProfile(token);
      setUser(res.data);
    }
  };

  const loadSocket = async () => {
    if (user.role === 'patient' && me !== '') {
      await updateProfile({ socketId: me })
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    loadSocket();
  }, [user, me]);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
