import { Container, Stack, Typography } from "@mui/material";
import step from "../../../assets/svg/Steps.svg";
import { stepsData } from "../../DemoData/HomeData";
import StepCard from "./StepCard";

const Steps = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" mb={5} fontWeight={800}>
        Three easy steps!
      </Typography>
      <Typography variant="body1" align="center" mb={3} px={15}>
        You don't need to wait physically hours in hospital to see a doctor.{" "}
        <br /> You can join the online queue immediately, while you can continue
        doing other tasks at home or office.
      </Typography>
      <Stack direction="row" spacing={5}>
        <img src={step} width={385} height={610} alt="Steps" />
        <Stack direction="column" spacing={8} justifyContent="center">
          {stepsData.map((step) => (
            <StepCard key={step.id} data={step} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Steps;
