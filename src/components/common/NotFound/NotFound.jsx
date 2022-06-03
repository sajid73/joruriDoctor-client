import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React from 'react';
import { ReactComponent as ReactLogo } from '../../../assets/svg/404 Error with a cute animal-bro.svg';

const NotFound = () => {
    return (
        <Box>
            <Box sx={{ width: { sm: '100%', md: '50%', lg: '50%' }, margin: 'auto', marginTop: '-3rem', marginBottom: '-5rem' }}>
                <ReactLogo />
            </Box>
            <Typography variant="h3" color="#0091CD" textAlign={"center"}>Page not found!</Typography>
        </Box>
    );
};

export default NotFound;