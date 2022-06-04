import { Paper, Typography } from '@mui/material';
import React from 'react';

const SingleService = ({ img, title }) => {
    return (
        <Paper elevation={3} sx={{ textAlign: 'center', minWidth: '250px', p: 5, m:3 }}>
            <Typography textAlign={'center'} variant="h5" color="initial">{title}</Typography>
            <img width={80} src={img} alt={title} />
            <Typography variant="body1" color="GrayText">Get your appointment</Typography>
        </Paper>
    );
};

export default SingleService;