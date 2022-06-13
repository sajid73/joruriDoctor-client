import { Route, Routes } from "react-router-dom";
import NotFound from "./components/common/NotFound/NotFound";
import Profile from "./components/dashboard/Profile";
import VideoCall from "./components/dashboard/VideoCall";
import Dashboard from "./layout/Dashboard";
import About from "./pages/About";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const AppRouter = () => {
  return (
    <div style={{paddingTop: '5rem',minHeight: '87vh'}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="videocall" element={<VideoCall />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
