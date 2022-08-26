import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import QueueOutlinedIcon from '@mui/icons-material/QueueOutlined';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../states/app.context";

const DrawerList = () => {
    const { user } = useContext(AppContext);
    const logout = () => {
        localStorage.clear();
        window.location.reload();
    };

    let activeStyle = {
        backgroundColor: "#00D6A3",
        color: '#033b4a'
    };
    return (
        <>
            <ListItemButton component={NavLink} style={({ isActive }) =>
                isActive ? activeStyle : undefined
            } to="profile">
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItemButton>
            <ListItemButton component={NavLink} style={({ isActive }) =>
                isActive ? activeStyle : undefined
            } to="doclist">
                <ListItemIcon>
                    <RecentActorsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Doctor's list" />
            </ListItemButton>
            {
                user?.role === 'patient' ? <ListItemButton component={NavLink} style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } to="appointmentbook">
                    <ListItemIcon>
                        <VideoCallIcon />
                    </ListItemIcon>
                    <ListItemText primary="Book Appointment" />
                </ListItemButton> : <></>
            }
            {
                user?.role === 'admin' ? <ListItemButton component={NavLink} style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } to="docapprove">
                    <ListItemIcon>
                        <RecentActorsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pending doctors" />
                </ListItemButton> : <></>
            }
            <ListItemButton component={NavLink} style={({ isActive }) =>
                isActive ? activeStyle : undefined
            } to="appointments">
                <ListItemIcon>
                    <QueueOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Appointment list" />
            </ListItemButton>
            {/* <ListItemButton component={NavLink} style={({ isActive }) =>
      isActive ? activeStyle : undefined
    } to="addadmin">
      <ListItemIcon>
        <SupervisorAccountIcon />
      </ListItemIcon>
      <ListItemText primary="Add Admin" />
    </ListItemButton> */}
            {
                user?.role === 'admin' ? <ListItemButton component={NavLink} style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } to="adddoc">
                    <ListItemIcon>
                        <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Doctor" />
                </ListItemButton> : <></>
            }
            <ListItemButton onClick={logout} component={NavLink} style={({ isActive }) =>
                isActive ? activeStyle : undefined
            } to="/">
                <ListItemIcon>
                    <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Sign Out" />
            </ListItemButton>
        </>
    );
};

export default DrawerList;