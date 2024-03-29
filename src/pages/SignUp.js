import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { saveProfile, signUpUser } from "../api";
import { AppContext } from "../states/app.context";
import signUp from "./../assets/svg/Mobile login-pana.svg";

const SignUp = () => {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("firstName") + " " + data.get("lastName");
    const obj = {
      email: data.get("email"),
      password: data.get("password"),
      name,
    };
    const res = await signUpUser(obj);
    if (res.status === 201) {
      setUser(res.data);
      await saveProfile(res.data);
      navigate(from);
    }
  };

  useEffect(() => {
    document.title = "Sign Up - Joruri Doctor";
  }, []);
  return (
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
        <img width="100%" src={signUp} alt="sign up" />
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
            sx={{ fontWeight: 700, color: "#00D6A3" }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography
                  component={Link}
                  to="/signin"
                  variant="body1"
                  sx={{
                    "&:hover": {
                      color: "#00D6A3",
                    },
                  }}
                >
                  Already have an account? Sign in
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default SignUp;
