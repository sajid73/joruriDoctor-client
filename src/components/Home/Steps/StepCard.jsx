import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Paper, Stack, Typography } from "@mui/material";

const StepCard = ({ data }) => {

  return (
    <Stack direction="row" spacing={8} alignItems="center">
      <Typography
        sx={{
          display: {
            xs: "none",
            md: "inline-block",
          },
          width: "120px",
        }}
        variant="h1"
        align="center"
      >
        {data.id}
      </Typography>
      <Paper
        sx={{
          display: "flex",
          justifyContent:"space-around",
          alignItems: "center",
          width: "280px",
          height: "120px",
        }}
      >
        <FontAwesomeIcon
          icon={solid('magnifying-glass')}
          size="3x"
          color="red"
        />
      </Paper>
      <Typography variant="h6">
        <b>{data.title}</b>
        <br />
        <Typography variant="body1">{data.desc}</Typography>
      </Typography>
    </Stack>
  );
};

export default StepCard;
