import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { patientInfo } from "../../../api";
import PaitentCard from "./PaitentCard";

const PaitentFeedBack = () => {
  const [patients, setPatients] = useState();

  const patientData = async () => {
    const res = await patientInfo();
    setPatients(res?.data?.patients);
  };

  useEffect(() => {
    patientData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        mb: 15,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#01D6A3",
          color: "white",
          borderRadius: 0,
          px: 15,
          pt: 5,
          pb: 15,
        }}
      >
        <Stack direction="column" spacing={2} maxWidth={450}>
          <span>CLIENTS</span>
          <Typography variant="h4" fontWeight={900}>
            Happy Patients & Clients
          </Typography>
          <Typography variant="body1" align="justify" maxWidth={850}>
            If you need any medical help we are available for you. Lorem ipsum
            dolor sit amet, sectetur adipiscing elit, sed do eiusmod tempor the
            incididunt ut labore et dolore.
          </Typography>
        </Stack>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "#033B4A",
          p: 10,
          position: "relative",
          top: '5rem',
          right: "3rem",
          width: "50%",
          height: "250px",
          justifyContent: "center"
        }}
      >
        <Swiper 
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {patients?.map((pat) => (
            <SwiperSlide>
              <PaitentCard key={pat._id} pat={pat} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Paper>
    </Box>
  );
};

export default PaitentFeedBack;
