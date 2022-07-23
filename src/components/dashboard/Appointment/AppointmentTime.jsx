import { Button, Input, LinearProgress, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { doctorInfo } from '../../../api';
import { AppContext } from '../../../states/app.context';

const AppointmentTime = () => {
    const { user } = useContext(AppContext);
    const [doc, setDoc] = useState();
    const { control, handleSubmit } = useForm();
    console.log(user._id);
    let { docid } = useParams();

    const onSubmit = (data) => {
        data = { ...data, doctorId: docid, patientId: user._id };
        console.log(data);
    }

    const loadInfo = async () => {
        const res = await doctorInfo(`_id=${docid}`);
        setDoc(res.data.doctors[0]);
    }
    useEffect(() => {
        loadInfo()
        // eslint-disable-next-line
    }, [])

    return (<>
        {
            doc ? <div>
                <h1>Select appointment time for <em>Dr. {doc.userId.name}</em></h1>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}>
                    <Stack direction={"column"} alignItems="center" spacing={2}>
                        <label for="appointment">Date of appointment: </label>
                        <Controller name="appointmentTime" control={control} render={({ field }) => (<Input {...field} type="date" id="appointment" name="appointment" />)} /> <br />
                        <Controller name="problem" control={control} render={({ field }) => (
                            <TextField {...field} placeholder="Define problem" />
                        )} /> <br />
                        <Button type="submit" variant="contained" sx={{ mt: '10px' }}>
                            Book
                        </Button>
                    </Stack>
                </Box >
            </div> : <LinearProgress />
        }
    </>);
};

export default AppointmentTime;