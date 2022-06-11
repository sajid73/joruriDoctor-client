import { Container, Stack } from "@mui/material";
import step from "../../../assets/svg/Steps.svg";
import { stepsData } from "../../DemoData/HomeData";
import StepCard from "./StepCard";

const Steps = () => {
  return (
    <Container>
      <Stack direction="row" spacing={5}>
        <img src={step} width={385} height={610} alt="Steps" />
        <Stack direction="column" spacing={3}>
          {stepsData.map((step) => (
            <StepCard key={step.id} data={step} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Steps;
