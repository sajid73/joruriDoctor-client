import { Slide } from '@mui/material';
import React from 'react';
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import doc from './../../../assets/images/5183184.png';


const Carousel = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div style={{ width: '30vw', display: 'flex', alignItems: 'center' }}>
                            <h1>Video consultation for doctors and their patients</h1>
                        </div>
                        <Slide direction='down' in={true} mountOnEnter timeout={1000}>
                            <div style={{ width: '40vw' }}>
                                <img src={doc} width="100%" alt='doc' />
                            </div>
                        </Slide>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>Slide 2</SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Carousel;