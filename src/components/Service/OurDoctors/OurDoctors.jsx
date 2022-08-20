import { Box, Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { doctorList } from "../../../api";

import DoctorCard from "../../About/AllDoctors/DoctorCard";

const OurDoctors = () => {
  const[doctors, setDoctors] = useState();

  const doctorData = async () => {
    const res = await doctorList();
    setDoctors(res?.data?.doctors);
  };

  // console.log(doctors);

  useEffect(() => {
    doctorData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "#3DE49A",
        justifyContent: "center",
        alignItems: "center",
        // color: "white",
        gap: 3,
        py: 10,
      }}
    >
      <Typography variant="h3">All OF OUR DOCTORS</Typography>
      <Divider orientation='horizontal'  color='#3DE49A' />
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {doctors?.map((doc) => (
            <Grid item={true} xs={2} sm={4} md={4}>
              <DoctorCard key={doc._id} doc={doc} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurDoctors;
