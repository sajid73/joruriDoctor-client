import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";

const logout = () => {
  localStorage.clear();
  window.location.reload();
};

let activeStyle = {
  backgroundColor: "#00D6A3",
  color: '#033b4a'
};

export const mainListItems = (
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
    <ListItemButton component={NavLink} style={({ isActive }) =>
      isActive ? activeStyle : undefined
    } to="appointmentbook">
      <ListItemIcon>
        <VideoCallIcon />
      </ListItemIcon>
      <ListItemText primary="Appointment" />
    </ListItemButton>
    <ListItemButton component={NavLink} style={({ isActive }) =>
      isActive ? activeStyle : undefined
    } to="addadmin">
      <ListItemIcon>
        <SupervisorAccountIcon />
      </ListItemIcon>
      <ListItemText primary="Add Admin" />
    </ListItemButton>
    <ListItemButton component={NavLink} style={({ isActive }) =>
      isActive ? activeStyle : undefined
    } to="adddoc">
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Doctor" />
    </ListItemButton>
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
