import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getAppointment, updateAppointment } from '../../../api';
import ShowResult from '../../common/others/ShowResult';

const Prescription = () => {
    const { control, handleSubmit } = useForm();
    const [prescription, setPrescription] = useState({ problem: '', prescription: '', exams: '' });
    const [submitStats, setSubmitStats] = useState({ status: '', desc: "", open: false });
    const { apntid } = useParams();
    const onSubmit = async (data) => {
        // console.log(data);
        const obj = {
            ...data,
            isDone: true
        }
        const res = await updateAppointment(apntid, obj);
        // console.log(res)
        if (res?.status === 200) {
            setSubmitStats({ status: 'success', desc: "Appointment done", open: true });
        } else {
            setSubmitStats({ status: 'error', desc: "Something went wrong on appointment", open: true });
        }
    }
    const loadPrescription = async () => {
        const res = await getAppointment(apntid);
        if (res?.status === 200) {
            setPrescription({
                problem: res?.data?.appointment?.problem,
                prescription: res?.data?.appointment?.prescription,
                exams: res?.data?.appointment?.exams
            })
        }
    }
    useEffect(() => {
        loadPrescription();
        // eslint-disable-next-line
    }, [])

    return (
        <Box
            component="form"
            noValidate
            sx={{ mt: 5 }}
            onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={"column"} alignItems="center" spacing={2}>
                <p><b>Problem:</b> {prescription.problem}</p>
                <Typography variant="h5" color="initial">Prescribe Section</Typography>
                <Controller name="prescription" control={control} render={({ field }) => (
                    <TextField defaultValue={prescription.prescription} multiline rows={3} sx={{ width: '60%' }} {...field} placeholder="Rx:" />
                )} /> <br />
                <Controller name="exams" control={control} render={({ field }) => (
                    <TextField defaultValue={prescription.exams} multiline rows={3} sx={{ width: '50%' }} {...field} placeholder="Exams" />
                )} /> <br />
                <Button type="submit" variant="contained" sx={{ mt: '10px' }}>
                    Prescribe
                </Button>
            </Stack>
            <ShowResult submitStats={submitStats} setSubmitStats={setSubmitStats} />
        </Box >
    );
};

export default Prescription;