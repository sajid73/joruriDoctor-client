import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          justifyContent: "space-around",
          alignItems: "center",
          padding: "1rem",
          width: "280px",
          height: "120px",
        }}
      >
        {
          data.icon === 'glass' ? (<FontAwesomeIcon
            icon={solid('magnifying-glass')}
            size="3x"
            color='#00D6A3'
          />) : data.icon === 'video' ? (<FontAwesomeIcon
            icon={solid('video')}
            size="3x"
            color='#00D6A3'
          />) : (<FontAwesomeIcon
            icon={solid('file-prescription')}
            size="3x"
            color='#00D6A3'
          />)
        }
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
