import MedicationIcon from '@mui/icons-material/Medication';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Paper, Stack, Typography } from "@mui/material";

const iconStyle = {
  color: '#00D6A3',
  fontSize: '4rem'
}

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
          data.icon === 'glass' ? (<SearchOutlinedIcon sx={iconStyle} />) :
            data.icon === 'video' ? (<VideocamIcon sx={iconStyle} />) :
              (<MedicationIcon sx={iconStyle} />)
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
