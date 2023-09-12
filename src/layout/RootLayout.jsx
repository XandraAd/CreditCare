/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import SideNav from "../component/SideNav";

function RootLayout({isAuthenticated}) {
  return (
    <>
      {isAuthenticated && <SideNav />}
      {isAuthenticated && <Outlet />}
    </>
  );
}

export default RootLayout;
