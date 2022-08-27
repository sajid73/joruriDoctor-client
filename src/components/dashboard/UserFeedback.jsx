import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { updateProfile } from '../../api';
import { AppContext } from '../../states/app.context';
import ShowResult from '../common/others/ShowResult';

const UserFeedback = () => {
    const { user } = useContext(AppContext)
    const [feedback, setFeedback] = useState();
    const [submitStats, setSubmitStats] = useState({ status: "", desc: "", open: false });
    const handleSubmit = async () => {
        const res = await updateProfile({ feedback });
        if (res?.status === 201) {
            setSubmitStats({ status: "success", desc: "Thanks for your feedback", open: true });
        } else {
            setSubmitStats({ status: "error", desc: "Something went wrong", open: true });
        }
    }
    useEffect(() => {
        setFeedback(user?.feedback);
    }, [user])

    return (
        <Container sx={{
            my: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2
        }}>
            <Typography variant="h4" color="#00D6A3" textAlign={'center'}>Feedback section</Typography>
            <TextField
                defaultValue={feedback}
                variant="outlined"
                multiline
                rows={5}
                sx={{
                    width: "500px",
                    backgroundColor: "white",
                    color: "black",
                    minHeight: 'auto'
                }}
                onChange={(e) => {
                    setFeedback(e.target.value);
                }}
                placeholder="Give your opinion here"
            />
            <Button
                onClick={() => handleSubmit()}
                variant="contained"
                sx={{
                    mt: "10px",
                    textAlign: "center",
                    backgroundColor: "#00D6A3",
                    color: "white",
                }}
            >
                Feedback
            </Button>
            <ShowResult submitStats={submitStats} setSubmitStats={setSubmitStats} />
        </Container>
    );
};

export default UserFeedback;