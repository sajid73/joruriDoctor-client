import React, { createContext, useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import { io } from 'socket.io-client';
import { myProfile, saveProfile, updateProfile } from "../api";

// const socket = io("http://localhost:5005");
const socket = io("https://glacial-ravine-76078.herokuapp.com");

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');

  const myVideo = useRef(null);
  const userVideo = useRef(null);
  const connectionRef = useRef(null);

  const loadUserData = async () => {
    socket.on('me', (id) => setMe(id));
    const userData = localStorage.getItem("user");
    if (userData) {
      const data = await JSON.parse(userData);
      setUser(data);
    }
    const token = localStorage.getItem("token");
    if (token) {
      const res = await myProfile(token);
      setUser(res.data);
      await saveProfile(res.data);
      setName(res.data.name);
    }
  };
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

  const getUserMedia = async () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        // myVideo.current.srcObject = currentStream;
        let video = myVideo.current;
        video.srcObject = currentStream;
        // video.play();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const loadSocket = async () => {
    if (user?.role === 'patient' && me !== '') {
      await updateProfile({ socketId: me });
    }
    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }

  useEffect(() => {
    loadUserData();
    // getUserMedia();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    loadSocket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, me])


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
    callEnded,
    me,
    callUser,
    leaveCall,
    answerCall,
    getUserMedia
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
