import { Grid, Paper, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { AppContext } from '../../../states/app.context';

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(AppContext);

    return (
        <Grid container sx={{ justifyContent: 'center' }}>
            {stream && (
                <Paper sx={{ p: '10px', border: '2px solid black', m: '10px' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                        <video playsInline muted ref={myVideo} autoPlay sx={{ width: 500 }} />
                    </Grid>
                </Paper>
            )}
            {callAccepted && !callEnded && (
                <Paper sx={{ p: '10px', border: '2px solid black', m: '10px' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
                        <video playsInline ref={userVideo} autoPlay sx={{ width: 500 }} />
                    </Grid>
                </Paper>
            )}
        </Grid>
    );
};

export default VideoPlayer;
