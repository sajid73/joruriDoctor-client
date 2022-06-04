import React, { useEffect } from "react";
import HomeCarousel from "../components/Home/Carousel/HomeCarousel";
import Services from "../components/Home/Services/Services";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Joruri Doctor";
  }, []);

  return (
    <div>
      <HomeCarousel />
      <Services />
    </div>
  );
};

export default Home;
