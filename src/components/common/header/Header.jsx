import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../../states/app.context";
const pages = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
];

const Header = () => {
  const { user } = useContext(AppContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [color, setColor] = useState("#00D6A3");
  const [navColor, setNavColor] = useState("hsla(0, 0%, 80.3%, 0.1)");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setNavColor("#033b4a");
    } else {
      if (location.pathname === "/") {
        setNavColor("hsla(0, 0%, 80.3%, 0.1)");
      } else {
        setColor("#00D6A3");
        setNavColor("#033b4a");
      }
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setColor("white");
      setNavColor("hsla(0, 0%, 80.3%, 0.1)");
    } else {
      setColor("#00D6A3");
      setNavColor("#033b4a");
    }
  }, [location, user]);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        backdropFilter: `blur(4px)`,
        backgroundColor: navColor,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: { md: "flex" },
              mt: { xs: 2, md: 0 },
              ml: { xs: 2, md: 0 },
            }}
          >
            <img
              src={require("../../../assets/images/joruriDoctor02.png")}
              alt="logo"
              width={180}
            />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              // color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to={page.link}
                    textAlign="center"
                  >
                    {page?.name}
                  </Typography>
                </MenuItem>
              ))}
              {user.name ? (
                user?.name
              ) : (
                <MenuItem
                  component={Link}
                  to="/signin"
                  onClick={handleCloseNavMenu}
                  sx={{
                    backgroundColor: "#00D6A3",
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": {
                      color: "black",
                      backgroundColor: "white",
                    },
                  }}
                >
                  Sign in
                </MenuItem>
              )}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 3,
              columnGap: 4,
              justifyContent: "flex-end",
              display: { xs: "none", md: "inline-flex" },
            }}
          >
            {pages.map((page) => (
              <Link key={page.link} to={page.link}>
                <Button
                  sx={{
                    fontWeight: "bold",
                    color: color,
                    fontSize: 15,
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      height: "10%",
                      left: "10%",
                      bottom: 0,
                      width: 0,
                      backgroundColor: color,
                      transition: "all ease-in-out .2s",
                    },
                    "&:hover": {
                      color: "#00D6A3",
                    },
                    "&:hover::after": {
                      width: "100%",
                      left: 0,
                    },
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
            {user.name ? (
              <Button
                component={Link}
                to="dashboard/profile"
                sx={{
                  mx: 3,
                  display: "flex",
                  backgroundColor: "black",
                  color: "#00D6A3",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "black",
                    backgroundColor: "white",
                  },
                }}
              >
                <Avatar sx={{ width: 24, height: 24, mx: 1 }} src={user?.avatar} /> {user?.name}
              </Button>
            ) : (
              <Button
                component={Link}
                to="/signin"
                sx={{
                  mx: 3,
                  display: "block",
                  backgroundColor: "#00D6A3",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "black",
                    backgroundColor: "white",
                  },
                }}
              >
                Sign in
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
