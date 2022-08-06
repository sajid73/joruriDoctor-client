import { Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { Snackbar } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../states/app.context';

const CallOptions = ({ children }) => {
    const { callAccepted, me, name, setName, callEnded, leaveCall, callUser, user } = useContext(AppContext);
    const [idToCall, setIdToCall] = useState('');
    const [open, setOpen] = useState(false);

    useEffect(() => {
      setName(user?.name)

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (
        <Container style={{
            width: '600px',
            margin: '35px 0',
            padding: 0,
        }}>
            <Paper elevation={10} sx={{
                p: '10px 20px',
                border: '2px solid black',
            }}>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column'
                }} noValidate autoComplete="off">
                    <Grid container style={{ width: '100%' }}>
                        <Grid item xs={12} md={6} style={{ padding: 20 }}>
                            <Typography gutterBottom variant="h6">Account Info</Typography>
                            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            <Button variant="contained" onClick={() => { navigator.clipboard.writeText(me); setOpen(true) }} color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                                Copy Your ID
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6} style={{ padding: 20 }}>
                            <Typography gutterBottom variant="h6">Make a call</Typography>
                            <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
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
                    </Grid>
                </form>
                {children}
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={open}
                    onClose={() => setOpen(false)}
                    message="Text copied!"
                />
            </Paper>
        </Container>
    );
};

export default CallOptions;