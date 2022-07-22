import { Route, Routes } from "react-router-dom";
import NotFound from "./components/common/NotFound/NotFound";
import ProfileLayout from "./components/common/Profile/ProfileLayout";
import AddAdmin from "./components/dashboard/admin/AddAdmin";
import AddDoc from "./components/dashboard/admin/AddDoc";
import AppointmentBook from "./components/dashboard/Appointment/AppointmentBook";
import AppointmentTime from "./components/dashboard/Appointment/AppointmentTime";
import DoctorList from "./components/dashboard/DoctorList";
import EditProfile from "./components/dashboard/ProfileLayout/EditProfile";
import Dashboard from "./layout/Dashboard";
import About from "./pages/About";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const AppRouter = () => {
  return (
    <div sx={{ paddingTop: "5rem", minHeight: "87vh" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="test" element={<ProfileLayout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" index element={<EditProfile />} />
          <Route path="doclist" element={<DoctorList />} />
          <Route path="appointmentbook" element={<AppointmentBook />} />
          <Route path="appointmentbook/:docid" element={<AppointmentTime />} />
          <Route path="adddoc" element={<AddDoc />} />
          <Route path="addadmin" element={<AddAdmin />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
