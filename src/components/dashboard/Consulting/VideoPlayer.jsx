import { Phone, PhoneDisabled } from '@material-ui/icons';
import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext } from 'react';
import { AppContext } from '../../../states/app.context';

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, leaveCall, stream, user, callUser } = useContext(AppContext);

    return (
        <Grid container>
            {stream && (
                <Paper sx={{ p: '10px', border: '2px solid black', m: '10px' }}>
                    <Grid item xs={12} md={6} style={{ padding: '1rem' }}>
                        <Typography variant="h5" gutterBottom>{user?.name || 'Name'}</Typography>
                        <video playsInline muted ref={myVideo} autoPlay style={{ width: 300 }} />
                    </Grid>
                </Paper>
            )}
            {callAccepted && !callEnded && (
                <Paper sx={{ p: '10px', border: '2px solid black', m: '10px' }}>
                    <Grid item xs={12} md={6} style={{ padding: '1rem' }}>
                        <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                        <video playsInline ref={userVideo} autoPlay style={{ width: 100 }} />
                    </Grid>
                </Paper>
            )}
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
