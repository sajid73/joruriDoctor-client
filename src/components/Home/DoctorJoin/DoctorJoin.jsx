import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import intro from "../../../assets/svg/qualifiedDoctor.svg";

const DoctorJoin = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={10}
      sx={{
        my: 10,
        px: 25,
      }}
    >
      <Stack direction="column" spacing={4}>
        <Typography variant="h2">Are You A Qualified Doctor?</Typography>
        <Typography variant="subtitle1" sx={{ color: "#00D6A3" }}>
          Join the forefront of digital healthcare
        </Typography>
        <Typography variant="body1" align="justify">
          Join JoruriDoctor network and create your virtual chamber provide
          medical consultancy via video call and expand the reach of your
          service.
        </Typography>
        <Typography variant="h6">
          Enroll yourself just in minutes!
        </Typography>
        <Button
          component={Link}
          to="joinasdoctor"
          sx={{
            fontSize: "16px",
            alignItems: "center",
            backgroundColor: "#00D6A3",
            color: "black",
            "&:hover": {
              backgroundColor: "#033B4A",
              color: "white",
            },
          }}
        >
          Join as doctor
        </Button>
      </Stack>
      <img src={intro} alt="Web-Info" width={460} height={500} />
    </Stack>
  );
};

export default DoctorJoin;
