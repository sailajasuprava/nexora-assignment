import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="min-h-screen bg-linear-to-b from-yellow-50 to-white">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
