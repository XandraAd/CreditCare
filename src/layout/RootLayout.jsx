/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import SideNav from "../component/SideNav";
import Navigation from "../component/Navigation";

function RootLayout({isAuthenticated}) {
  return (
    <>
      {isAuthenticated && <SideNav />}
      {isAuthenticated && <Navigation/>}
      {isAuthenticated && <Outlet />}
    </>
  );
}

export default RootLayout;
