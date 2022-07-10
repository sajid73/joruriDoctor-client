import { useEffect } from "react";
import HomeCarousel from "../components/Home/Carousel/HomeCarousel";
import Intro from "../components/Home/Introduction/Intro";
import Services from "../components/Home/Services/Services";
import Steps from "../components/Home/Steps/Steps";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Joruri Doctor";
  }, []);

  return (
    <div>
      <HomeCarousel />
      <Services />
      <Intro />
      <Steps />
    </div>
  );
};

export default Home;
