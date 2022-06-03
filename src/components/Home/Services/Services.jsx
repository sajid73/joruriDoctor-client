import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import car from "../../../assets/images/services/car.png";
import clock from "../../../assets/images/services/clock.png";
import team from "../../../assets/images/services/medical-team.png";
import SingleService from './SingleService';

const Services = () => {
    return (
        <Container sx={{marginTop: '2rem'}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ margin: '2rem' }}>
                <SingleService img={team} title={"Verfied doctors"} />
                <SingleService img={clock} title={"Fast appointment"} />
                <SingleService img={car} title={"Less transport"} />
            </Grid>
        </Container>
    );
};

export default Services;