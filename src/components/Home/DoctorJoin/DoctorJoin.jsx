import { Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import joinDoc from "../../../assets/images/Experience.jpg";

const DoctorJoin = () => {
    return (
        <Container sx={{
            my: 10,
        }}>
            <Typography variant="h3" fontWeight={700}>
                Career
            </Typography>
            <Stack direction={{ md: 'row', sm: 'col' }} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="h2" color="inherit" component={Link} to='joinasdoctor' sx={{ alignItems: 'center' }}>Join as doctor</Typography>
                <img src={joinDoc} alt="doctor-join" width={400} height={600} />
            </Stack>
        </Container>
    );
};

export default DoctorJoin;