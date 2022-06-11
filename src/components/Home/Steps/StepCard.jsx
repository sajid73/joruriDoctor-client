import PersonSearchIcon from "@mui/icons-material/PersonSearch";
// import * as Muicon from "@material-ui/icons";
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
      <Paper sx={{ textAlign: "center", width: "240px", height: "90px" }}>
        <PersonSearchIcon />
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
