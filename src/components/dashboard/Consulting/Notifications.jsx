import { Alert, Button, Snackbar, Stack } from "@mui/material";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../states/app.context';

const CallNotification = () => {
    const { call, callAccepted } = useContext(AppContext);
    const action = (
        <Button sx={{ mx: 1, backgroundColor: "#033B4A", color: "#3DE49A", height: '40px' }} size="small" component={Link} to='/dashboard/video'>
            Receive
        </Button>
    );
    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                // <Snackbar
                //     open={call.isReceivingCall && !callAccepted}
                //     message={`Incoming call from ${call.name || 'your doctor'}`}
                //     action={action}
                // />
                <Snackbar
                    open={call.isReceivingCall && !callAccepted}
                >
                    <Alert
                        severity={'success'}
                        sx={{ width: "100%", fontWeight: "bolder" }}
                        elevation={6}
                    >
                        <Stack direction={'row'} alignItems='baseline'>
                            <>{`Incoming call from ${call.name || 'your doctor'}`}</>
                            {action}
                        </Stack>
                    </Alert>
                </Snackbar>
            )}
        </>
    );
};

export default CallNotification;