import MenuIcon from "@mui/icons-material/Menu";
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const pages = [{ id: 1, name: 'Home', link: '/' }, { id: 2, name: 'About', link: '/about' }];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position='fixed' sx={{ backdropFilter: `blur(4px)`, backgroundColor: 'hsla(0, 0%, 80.3%, 0.1)', color: 'white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 5, ml: 5, display: { md: "flex" } }}
                    >
                        <img src={require("../../../assets/images/joruriDoctor.png")} alt="logo" width={150} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'flex', md: 'none' } }}>
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
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{
                        flexGrow: 3,
                        columnGap: 4,
                        justifyContent: "flex-end",
                        display: { xs: "none", md: "inline-flex" }
                    }}>
                        {pages.map((page) => (
                            <Link key={page.link} to={page.link}><Button sx={{
                                fontWeight: "bold",
                                "&:after": {
                                    content: '""',
                                    position: "absolute",
                                    height: "10%",
                                    left: "10%",
                                    bottom: 0,
                                    width: 0,
                                    backgroundColor: "white",
                                    transition: "all ease-in-out .2s",
                                },
                                "&:hover": {
                                    color: "#00D6A3",
                                },
                                "&:hover::after": {
                                    width: "100%",
                                    left: 0,
                                },
                            }}>{page.name}</Button></Link>
                        ))}
                    </Box>
                    <Link to='/signin'><Button sx={{
                        mx: 3, display: 'block', backgroundColor: '#0091CD', color: 'white', '&:hover': {
                            color: '#0091CD'
                        }
                    }}>Sign in</Button></Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;