import { Container } from '@mui/system';
import React from 'react';
import car from "../../../assets/images/services/car.png";
import clock from "../../../assets/images/services/clock.png";
import team from "../../../assets/images/services/medical-team.png";
import SingleService from './SingleService';

const Services = () => {
    return (
        <Container sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '-10rem', position: 'relative', zIndex: 2 }}>
            <SingleService img={team} title={"Verfied doctors"} />
            <SingleService img={clock} title={"Fast appointment"} />
            <SingleService img={car} title={"Less transport"} />
        </Container>
    );
};

export default Services;