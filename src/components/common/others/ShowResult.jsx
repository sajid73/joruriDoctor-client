import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const ShowResult = ({ submitStats, setSubmitStats }) => {
    return (
        <Snackbar
            open={submitStats.open}
            autoHideDuration={4000}
            onClose={() => setSubmitStats({ ...submitStats, open: false })}
        >
            <Alert
                onClose={() => setSubmitStats({ ...submitStats, open: false })}
                severity={submitStats?.status}
                sx={{ width: "100%", fontWeight: "bolder" }}
                elevation={6}
                variant="filled"
            >
                {submitStats.desc}
            </Alert>
        </Snackbar>
    );
};

export default ShowResult;