import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const ShowResult = ({ submitStats, setSubmitStats }) => {
    return (
        <Snackbar
            open={
                submitStats.status === "success" || submitStats.status === "error"
                    ? true
                    : false
            }
            autoHideDuration={4000}
            onClose={() => setSubmitStats({ status: "", desc: "" })}
        >
            <Alert
                onClose={() => setSubmitStats({ status: "", desc: "" })}
                severity={submitStats.status || "success"}
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