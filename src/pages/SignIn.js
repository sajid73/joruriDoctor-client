import { Alert } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import LoadingScreen from "react-loading-screen";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { saveProfile, signInUser } from "../api";
import { AppContext } from "../states/app.context";
import logo from "./../assets/images/joruriDoctor02.png";
import signIn from "./../assets/svg/Mobile login-bro.svg";

const SignIn = () => {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);

    const res = await signInUser({
      email: data.get("email"),
      password: data.get("password"),
    });
    if (res.status === 201) {
      setUser(res.data);
      await saveProfile(res.data);
      navigate(from);
    } else {
      setOpen(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  useEffect(() => {
    document.title = "Sign In - Joruri Doctor";
  }, []);
  return (
    <>
      {loading ? (
        <LoadingScreen
          loading={true}
          bgColor="#f1f1f1"
          spinnerColor="#9ee5f8"
          textColor="#676767"
          logoSrc={logo}
        />
      ) : (
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "50%" }, padding: "2rem" }}>
            <img width="100%" src={signIn} alt="Signin" />
          </Box>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                sx={{ fontWeight: 700, color: "#00D6A3"}}
              >
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    fontSize: "16px",
                    alignItems: "center",
                    backgroundColor: "#00D6A3",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#033B4A",
                      color: "white",
                    },
                  }}
                >
                  Sign In
                </Button>
                <Stack direction={"column"} spacing={3}>
                  <Typography
                    component={Link}
                    to="#"
                    variant="body1"
                    sx={{
                      "&:hover": {
                        color: "#00D6A3",
                      },
                    }}
                  >
                    Forgot password?
                  </Typography>
                  <Typography
                    component={Link}
                    to="/signup"
                    variant="body1"
                    sx={{
                      "&:hover": {
                        color: "#00D6A3",
                      },
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Container>
          <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={() => setOpen(false)}
          >
            <Alert
              onClose={() => setOpen(false)}
              severity="error"
              sx={{ width: "100%", fontWeight: "bolder" }}
              elevation={6}
              variant="filled"
            >
              Failed to login! Check email and password
            </Alert>
          </Snackbar>
        </Container>
      )}
    </>
  );
};

export default SignIn;
