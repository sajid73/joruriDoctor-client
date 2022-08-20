import { Stack, Typography } from "@mui/material";
import intro from "../../../assets/images/Doctor03.jpg";

const Intro = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={10}
      sx={{
        my: 10,
        px: 25,
      }}
    >
      <img src={intro} alt="Web-Info" width={460} height={585} />
      <Stack direction="column" spacing={4}>
        <span>INTRODUCING</span>
        <Typography variant="h2">
          Tackle the challenge of delivering health care
        </Typography>
        <Typography variant="body1" align="justify">
          JoruriDoctor is an online medical service app where patients can get
          24/7 video consultation from doctors. JoruriDoctor uses 256 bit encryption
          to secure the video consultation. Patient can keep their previous
          consultation history and view online prescriptions.
          <br />
          Doctor can join the platform using our simple on boarding process. We
          verify every doctor to make sure only BMDC authorised doctors are
          providing consultation using latest technologies.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Intro;
