import { Container } from '@mui/material';
import React from 'react';
import RegisterDoctor from '../components/DoctorRegister/RegisterDoctor';

const JoinDoctor = () => {
    return (
        <Container sx={{my: 2}}>
            <RegisterDoctor />
        </Container>
    );
};

export default JoinDoctor;