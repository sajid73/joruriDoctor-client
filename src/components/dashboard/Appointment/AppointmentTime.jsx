import { Button, Checkbox, FormControlLabel, FormGroup, Input, LinearProgress, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { createAppointment, doctorInfo } from '../../../api';
import { AppContext } from '../../../states/app.context';
import ShowResult from '../../common/others/ShowResult';

const AppointmentTime = () => {
    const { user } = useContext(AppContext);
    const navigate = useNavigate();
    const [doc, setDoc] = useState();
    const { control, handleSubmit, watch } = useForm();
    const [submitStats, setSubmitStats] = useState({ status: '', desc: "", open: false });
    let { docid } = useParams();

    const onSubmit = async (data) => {
        const appointmentDate = new Date(data.appointmentTime);
        let diff = appointmentDate - new Date();
        if (appointmentDate.getDate() === new Date().getDate()) {
            diff = 5183989989;
        }
        if (diff >= 5184000000) {
            setSubmitStats({ status: 'error', desc: "Can't book an appointment before 60 days", open: true });
            return;
        }
        if (diff < 0) {
            setSubmitStats({ status: 'error', desc: "Can't select past date or today", open: true });
            return;
        }
        if (data.problem.length <= 0) {
            setSubmitStats({ status: 'error', desc: "Please describe your problem", open: true });
            return;
        }
        data = { ...data, doctorId: docid, patientId: user._id };
        console.log(data);
        const res = await createAppointment(data);
        if (res?.status === 201) {
            setSubmitStats({ status: 'success', desc: "Appointment booked", open: true });
            navigate('/dashboard/appointments');
        } else {
            setSubmitStats({ status: 'error', desc: "Something went wrong on booking", open: true });
        }
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
                <h1>Select appointment time for <em style={{ color: "#00D6A3" }}>{doc.userId.name}</em></h1>
                <FormGroup>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}>
                        <Stack direction={"column"} alignItems="center" spacing={2}>
                            <label htmlFor="appointment">Date of appointment: </label>
                            <Controller name="appointmentTime" control={control} render={({ field }) => (<Input disabled={watch("isEmergency")} {...field} type="date" id="appointment" name="appointment" />)} /> <br />
                            <Controller name="isEmergency" control={control} render={({ field }) => (
                                <FormControlLabel control={<Checkbox {...field} id="isEmergency" name="isEmergency" defaultChecked={false} />} label="Emmergency" />)} /> <br />
                            {/* <Controller name="isEmergency" control={control} render={({ field }) => (<Checkbox {...field} id="isEmergency" name="isEmergency" defaultChecked={false} />)} /> Emergency <br /> */}
                            <Controller name="problem" control={control} render={({ field }) => (
                                <TextField multiline rows={3} sx={{ width: '40%' }} {...field} placeholder="Define problem" />
                            )} /> <br />
                            <Button type="submit" variant="contained" sx={{ mt: '10px' }}>
                                Book
                            </Button>
                        </Stack>
                    </Box >
                </FormGroup>
            </div> : <LinearProgress />
        }
        <ShowResult submitStats={submitStats} setSubmitStats={setSubmitStats} />
    </>);
};

export default AppointmentTime;