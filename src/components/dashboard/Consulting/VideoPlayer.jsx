import { PhoneDisabled } from '@material-ui/icons';
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../states/app.context';

const VideoPlayer = () => {
    const { callAccepted, userVideo, callEnded, leaveCall, callUser, call, user, getUserMedia, myVideo, answerCall } = useContext(AppContext);

    useEffect(() => {
        getUserMedia();
        window.scrollTo(0, 0);
        if (call.isReceivingCall && !callAccepted) {
            answerCall();
        }
        if (user?.role === 'doctor') {
            callUser(localStorage.getItem('patientSocketId'))
        }
        return () => {
            window.location.reload();
        }
        // eslint-disable-next-line
    }, [])
    // console.log(userVideo)
    return (
        <Grid container>
            {call.name && <Typography variant="h5" gutterBottom>Call from {call.name}</Typography>}<br /><br />
            <Paper sx={{ p: '10px', border: '2px solid black', m: '10px' }}>
                <Box item xs={12} md={6} style={{ padding: '1rem', position: 'relative', width: 720 }}>
                    {userVideo ? <video playsInline ref={userVideo} autoPlay style={{ width: 700 }} /> : 'No call'}
                    <video ref={myVideo} style={{ position: 'absolute', width: 300, bottom: 0, right: 0, border: '3px solid #00D6A3', borderRadius: '10px' }} playsInline muted autoPlay />
                </Box>
            </Paper>
            {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} style={{ marginTop: 20 }}>
                    Hang Up
                </Button>
            ) : (
                <>
                    {
                        // user?.role !== 'patient' && (<Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(localStorage.getItem('patientSocketId'), apntid)} style={{ marginTop: 20 }}>
                        //     Call
                        // </Button>)
                    }
                </>
            )}
            {/* {
                user?.role === 'doctor' && (<Box>

                </Box>)
            } */}
        </Grid>
    );
};

export default VideoPlayer;
