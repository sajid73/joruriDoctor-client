import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../states/app.context";
import DashDrawer from "./DashDrawer";

const mdTheme = createTheme();

const Dashboard = () => {
  const { user,getUserMedia } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    getUserMedia();
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    }
    // eslint-disable-next-line
  }, [user, navigate]);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <DashDrawer />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            minHeight: "100vh",
            overflow: "auto",
          }}
        >
          <Container sx={{ mt: 4, mb: 4 }}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
