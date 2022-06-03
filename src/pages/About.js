import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About - Joruri Doctor";
  }, []);
  return (
    <Container maxWidth="xs">
      <Typography variant="h3" color="#0091CD" sx={{ fontWeight: "regular" }}>
        About us
      </Typography>
    </Container>
  );
};

export default About;
