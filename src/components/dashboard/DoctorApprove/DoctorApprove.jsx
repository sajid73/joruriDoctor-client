import { Button, Card, CardActions, CardContent, CircularProgress, Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { doctorInfo, updateDoctor } from '../../../api';
import ShowResult from '../../common/others/ShowResult';

const DoctorApprove = () => {
    const [doctors, setDoctors] = useState();
    const [submitStats, setSubmitStats] = useState({ status: "", desc: "", open: false });
    const loadDoctors = async () => {
        const res = await doctorInfo(`isApproved=${false}`);
        setDoctors(res?.data?.doctors);
    }
    const handleApprove = async (id) => {
        const res = await updateDoctor(id, { isApproved: true });
        if (res.status === 200) {
            setSubmitStats({ status: "success", desc: "Doctor approved!", open: true });
            loadDoctors();
        } else {
            setSubmitStats({ status: "error", desc: "Something went wrong!", open: true });
        }
    }
    useEffect(() => {
        loadDoctors();
    }, [])

    return (
        <Container>
            {
                doctors ? (doctors.length !== 0 ? doctors?.map((doc) => (
                    <Card sx={{ my: 2 }}>
                        <Stack direction={'row'} justifyContent="space-between">
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {doc?.userId?.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {doc?.specialities?.map(sp => (<span>{sp}</span>))}
                                </Typography>
                                <Typography variant="body2">
                                    <span style={{ fontWeight: 'bold' }}>Qualification:</span> {doc.qualifications}
                                    <br />
                                    <span style={{ fontWeight: 'bold' }}>Service hour:</span> {doc.service_hours}
                                    <br />
                                    <span style={{ fontWeight: 'bold' }}>Experience:</span> {doc.experience}
                                    <br />
                                    <span style={{ fontWeight: 'bold' }}>Fees:</span> {doc.fees}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => handleApprove(doc._id)} variant='contained' color="success" size='medium'>Approve</Button>
                            </CardActions>
                        </Stack >
                        <ShowResult submitStats={submitStats} setSubmitStats={setSubmitStats} />
                    </Card >
                )) : (<Typography variant="h4" textAlign={'center'}>No doctors in pending list</Typography>)) : (<CircularProgress />)
            }
        </Container >
    );
};

export default DoctorApprove;