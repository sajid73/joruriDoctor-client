import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { AppContext } from '../../../states/app.context';

const CallNotification = () => {
    const { answerCall, call, callAccepted } = useContext(AppContext);
    // const [open, setOpen] = useState(false);
    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h1>{call.name} is calling:</h1>
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Answer
                    </Button>
                    {/* <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        open={open}
                        onClose={() => setOpen(false)}
                        message="Incoming call"
                    /> */}
                </div>
            )}
        </>
    );
};

export default CallNotification;