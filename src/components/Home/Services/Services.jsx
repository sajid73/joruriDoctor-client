import { Container } from "@mui/system";
import car from "../../../assets/images/services/car.png";
import clock from "../../../assets/images/services/clock.png";
import team from "../../../assets/images/services/medical-team.png";
import SingleService from "./SingleService";

const Services = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "-10rem",
        position: "relative",
        zIndex: 2,
      }}
    >
      <SingleService
        img={team}
        title={"Easy To Use"}
        des={
          "Get the best user experience on JoruriDoctor Website. Search for a doctor and get an instant consultation."
        }
      />
      <SingleService
        img={clock}
        title={"AnyTime"}
        des={
          "Talk to a doctor within minutes. Our qualified network of doctors is available 24/7. You can get a consultation and prescription whenever you need.."
        }
      />
      <SingleService
        img={car}
        title={"Quality & Trusted"}
        des={
          "JoruriDoctor's experienced doctors, specialists and therapists are selected carefully. Safety and quality is at the heart of everything we do."
        }
      />
    </Container>
  );
};

export default Services;
