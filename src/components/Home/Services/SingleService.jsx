import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const SingleService = ({img, title}) => {
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={3} sx={{ textAlign: 'center' }}>
                <Typography textAlign={'center'} variant="h5" color="initial">{title}</Typography>
                <img width={80} src={img} alt={title} />
                <Typography variant="body1" color="GrayText">Get your appointment</Typography>
            </Paper>
        </Grid>
    );
};

export default SingleService;