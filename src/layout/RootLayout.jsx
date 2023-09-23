/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import SideNav from "../component/SideNav";
import { Container } from "@chakra-ui/react";

function RootLayout({isAuthenticated}) {
  return (
    <>
      <Container maxW="container.xl" pt={2}>
        {isAuthenticated && <SideNav />}
        {isAuthenticated && <Outlet />}
      </Container>
    </>
  );
}

export default RootLayout;
