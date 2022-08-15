import { Button, Snackbar } from "@mui/material";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../states/app.context';

const CallNotification = () => {
    const { call, callAccepted } = useContext(AppContext);
    const action = (
        <Button color="secondary" size="small" component={Link} to='/dashboard/video'>
            Receive
        </Button>
    );
    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <Snackbar
                    open={call.isReceivingCall && !callAccepted}
                    message={`Incoming call from ${call.name || 'your doctor'}`}
                    action={action}
                />
            )}
        </>
    );
};

export default CallNotification;