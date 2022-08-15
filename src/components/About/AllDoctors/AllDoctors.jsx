import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { doctorList } from "../../../api";
import DoctorCard from "./DoctorCard";

const AllDoctors = () => {
  const [doctors, setDoctors] = useState();

  const doctorData = async () => {
    const res = await doctorList();
    setDoctors(res?.data?.doctors);
  };

  useEffect(() => {
    doctorData();
  }, []);

  const filterDoctors = doctors?.slice(-3);
  console.log(filterDoctors);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#033B4A",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        gap: 3,
        py: 10,
      }}
    >
      <Typography variant="subtitle1">MEET OUR EXPERIENCED TEAM</Typography>
      <Typography variant="h3">Our Dedicated Doctors Team</Typography>
      <Typography variant="body1" width={"55%"} textAlign="center">
        We offer extensive medical procedures to outbound and inbound patients
        what it is and we are very proud of achievement of our staff, We are all
        work together to help our all patients for recovery
      </Typography>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 0 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {filterDoctors?.map((doc) => (
            <Grid item={true} xs={2} sm={4} md={4}>
              <DoctorCard key={doc._id} doc={doc} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllDoctors;
