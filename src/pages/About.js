import React, { useEffect } from "react";
import AllDoctors from "../components/About/AllDoctors/AllDoctors";
import Experience from "../components/About/Experience/Experience";

const About = () => {
  useEffect(() => {
    document.title = "About - Joruri Doctor";
  }, []);
  return (
    <>
      <Experience />
      <AllDoctors />
    </>
  );
};

export default About;
