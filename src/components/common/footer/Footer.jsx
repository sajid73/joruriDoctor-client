import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        px: 10,
        py: 5,
        mt: 10,
        color: "white",
        backgroundColor: "#033B48",
      }}
    >
      <Stack direction={"column"} spacing={4}>
        <img
          src={require("../../../assets/images/joruriDoctor02.png")}
          alt="logo"
          width={240}
          height={70}
        />
        <Stack direction={"row"} spacing={2}>
          <PhoneIcon fontSize="large" sx={{ color: "#00D6A3" }} />
          <Typography variant="h6">09725663356</Typography>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <EmailIcon fontSize="large" sx={{ color: "#00D6A3" }} />
          <Typography variant="h6">support@jururidoctor.com.bd</Typography>
        </Stack>
        <Stack direction={"row"} spacing={3}>
          <FacebookIcon fontSize="large" sx={{ color: "#4267B2" }} />
          <TwitterIcon fontSize="large" sx={{ color: "#1DA1F2" }} />
          <YouTubeIcon fontSize="large" sx={{ color: "#FF0000" }} />
          <InstagramIcon fontSize="large" sx={{ color: "#fb3958" }} />
        </Stack>
      </Stack>
      <Stack direction={'row'} spacing={5} >
         <Stack spacing={2}>
             <MenuItem component={Link}>About</MenuItem>
             <MenuItem component={Link}>How it Works</MenuItem>
             <MenuItem component={Link}>Features</MenuItem>
             <MenuItem component={Link}>Blog</MenuItem>
             <MenuItem component={Link}>Contact Us</MenuItem>
         </Stack>
         <Divider orientation="vertical" color='white' />
         <Stack spacing={2}>
             <MenuItem component={Link}>For Doctors</MenuItem>
             <MenuItem component={Link}>Joruri Doctor For Enterprises</MenuItem>
             <MenuItem component={Link}>Terms & Conditions</MenuItem>
             <MenuItem component={Link}>Privacy Policy</MenuItem>
         </Stack>
      </Stack>
      <Stack>Think</Stack>
    </Box>
  );
};

export default Footer;
