import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { Paper, Stack, Typography } from "@mui/material";

const StepCard = ({ data }) => {
  return (
    <Stack direction="row" spacing={6}>
      <Typography
        sx={{
          display: {
            xs: "none",
            md: "inline-block",
          },
          width: "120px",
        }}
        variant="h1"
      >
        {data.id}
      </Typography>
      <Paper>
        <PersonSearchIcon />
      </Paper>
      <Typography variant="h6">
        <b>{data.title}</b>
        <br />
        {data.desc}
      </Typography>
    </Stack>
  );
};

export default StepCard;
