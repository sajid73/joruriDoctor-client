import { Button, Snackbar } from "@mui/material";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../states/app.context';

const CallNotification = () => {
    const { answerCall, call, callAccepted } = useContext(AppContext);
    const action = (
        <Button color="secondary" size="small" component={Link} to='/dashboard/video'>
          Receive
        </Button>
      );
    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h1>{call.name} is calling:</h1>
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Answer
                    </Button>
                    <Snackbar
                        open={call.isReceivingCall && !callAccepted}
                        message={`Incoming call from ${call.name || 'your doctor'}`}
                        action={action}
                    />
                    {/* <SnackbarContent
                        message="I love candy. I love cookies. I love cupcakes."
                        action={action}
                    /> */}
                </div>
            )}
        </>
    );
};

export default CallNotification;