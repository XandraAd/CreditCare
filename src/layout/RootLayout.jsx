import { Outlet } from "react-router-dom";
import SideNav from "../component/SideNav";

function RootLayout() {
  return (
    <>
      <SideNav />
      <Outlet />
    </>
  );
}

export default RootLayout;
