import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const logout = () => {
  localStorage.clear();
  window.location.reload();
};

export const mainListItems = (
  <>
    <ListItemButton component={Link} to="">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to="profile">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton component={Link} to="appointmentbook">
      <ListItemIcon>
        <VideoCallIcon />
      </ListItemIcon>
      <ListItemText primary="Appointment" />
    </ListItemButton>
    <ListItemButton component={Link} to="addadmin">
      <ListItemIcon>
        <SupervisorAccountIcon />
      </ListItemIcon>
      <ListItemText primary="Add Admin" />
    </ListItemButton>
    <ListItemButton component={Link} to="adddoc">
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Doctor" />
    </ListItemButton>
    <ListItemButton component={Link} to="doclist">
      <ListItemIcon>
        <RecentActorsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Doctor's list" />
    </ListItemButton>
    <ListItemButton onClick={logout} component={Link} to="/">
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItemButton>
  </>
);
