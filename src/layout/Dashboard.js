import { Outlet } from "react-router-dom";
import DashDrawer from "./DashDrawer";

const Dashboard = () => {
  return (
    <div>
      <DashDrawer />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
