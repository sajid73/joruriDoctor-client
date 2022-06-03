import React, { useEffect } from "react";
import Carousel from "../components/Home/Carousel/Carousel";
import Services from "../components/Home/Services/Services";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Joruri Doctor";
  }, []);

  return (
    <div>
      <Carousel />
      <Services />
    </div>
  );
};

export default Home;
