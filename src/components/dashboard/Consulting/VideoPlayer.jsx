import { Phone, PhoneDisabled } from '@material-ui/icons';
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../../../states/app.context';

const VideoPlayer = () => {
    const { callAccepted, userVideo, callEnded, leaveCall, callUser, call } = useContext(AppContext);

    const currentVideo = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((currentStream) => {
                currentVideo.current.srcObject = currentStream;
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <Grid container>
            {call.name && <Typography variant="h5" gutterBottom>Call from {call.name}</Typography>}<br />
            <Paper sx={{ p: '10px', border: '2px solid black', m: '10px' }}>
                <Box item xs={12} md={6} style={{ padding: '1rem', position: 'relative' }}>
                    <video playsInline muted ref={currentVideo} autoPlay style={{ width: 700 }} />
                    {
                        callAccepted && !callEnded && (<video style={{ position: 'absolute', width: 300, bottom: 0, right: 0, border: '3px solid #00D6A3', borderRadius: '10px' }} playsInline muted ref={userVideo} autoPlay />)
                    }
                </Box>
            </Paper>
            {/* {callAccepted && !callEnded && (
                <Paper sx={{ p: '10px', border: '2px solid black', m: '10px' }}>
                    <Grid item xs={12} md={6} style={{ padding: '1rem' }}>
                        <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                        <video playsInline ref={userVideo} autoPlay style={{ width: 100 }} />
                    </Grid>
                </Paper>
            )} */}
            {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} style={{ marginTop: 20 }}>
                    Hang Up
                </Button>
            ) : (
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(localStorage.getItem('patientSocketId'))} style={{ marginTop: 20 }}>
                    Call
                </Button>
            )}
        </Grid>
    );
};

export default VideoPlayer;
