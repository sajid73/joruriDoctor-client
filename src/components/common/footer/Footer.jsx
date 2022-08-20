import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Alert, Link, MenuItem, Snackbar, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState('')
  const [open, setOpen] = useState({
    open: false,
    msg: 'Invalid email',
    status: "error"
  })
  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  const checkEmail = () => {
    // eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setOpen({
        open: true,
        msg: 'Subscribed',
        status: "success"
      })
    } else {
      setOpen({
        open: true,
        msg: 'Invalid email',
        status: "error"
      })
    }
  }
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
        backgroundColor: "#033B48"
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
      <Stack direction={"row"} spacing={5}>
        <Stack spacing={2}>
          <MenuItem component={Link}>About</MenuItem>
          <MenuItem component={Link}>How it Works</MenuItem>
          <MenuItem component={Link}>Features</MenuItem>
          <MenuItem component={Link}>Blog</MenuItem>
          <MenuItem component={Link}>Contact Us</MenuItem>
        </Stack>
        <Divider orientation="vertical" color="white" />
        <Stack spacing={2}>
          <MenuItem component={Link}>For Doctors</MenuItem>
          <MenuItem component={Link}>Joruri Doctor For Enterprises</MenuItem>
          <MenuItem component={Link}>Terms & Conditions</MenuItem>
          <MenuItem component={Link}>Privacy Policy</MenuItem>
        </Stack>
      </Stack>
      <Stack direction={"column"} spacing={3}>
        <Typography variant="h4">Newsletter</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            label="Enter Your Email"
            variant="outlined"
            size="small"
            onChange={handleChange}
            sx={{
              borderRadius: 5,
              "& .MuiInputLabel-root": { color: "white" },
              "& .MuiFilledInput-input": {
                border: "1px solid #3DE49A",
                borderRadius: 5,
              },
              input: {
                color: "#3DE49A",
                background: "#1C4F5B",
              },
            }}
          />
          <IconButton
            sx={{
              backgroundColor: "#3DE49A",
              color: "white",
              mx: 2
            }}
            onClick={() => {
              checkEmail()
            }}
          >
            <EmailIcon />
          </IconButton>
        </Box>
      </Stack>
      <Snackbar
        open={open.open}
        autoHideDuration={4000}
        onClose={() => {
          setOpen({ ...open, open: false })
        }}
      >
        <Alert
          severity={open.status}
          sx={{ width: "100%", fontWeight: "bolder" }}
          elevation={6}
          variant="filled"
        >
          {open.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Footer;
