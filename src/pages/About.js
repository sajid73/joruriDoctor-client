import React, { useEffect } from "react";
import AllDoctors from "../components/About/AllDoctors/AllDoctors";
import Experience from "../components/About/Experience/Experience";
import PaitentFeedBack from "../components/About/PaitentFeedback/PaitentFeedBack";

const About = () => {
  useEffect(() => {
    document.title = "About - Joruri Doctor";
  }, []);
  return (
    <>
      <Experience />
      <AllDoctors />
      <PaitentFeedBack />
    </>
  );
};

export default About;
