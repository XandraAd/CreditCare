/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Box, Link as ChakraLink } from "@chakra-ui/react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Spacer,
  Stack,
  } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo3 from "../assets/png/logo-no-background.png";

const SideNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        className={`navbox ${scrolled ? "scrolled" : ""}`}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={9999}
        transition="background-color 0.3s ease-in-out"
        bg={scrolled ? "white" : "transparent"}
      >
       
        <Breadcrumb separator=" ">

        <BreadcrumbItem>
            <BreadcrumbLink>
              <Button
                leftIcon={<HamburgerIcon />}
                colorScheme="teal"
                
                onClick={isOpen ? onClose : onOpen}
              />

              <Drawer
                isOpen={isOpen}
                placement="left"
                initialFocusRef={firstField}
                onClose={onClose}
              >
                <DrawerOverlay />
                <DrawerContent style={{ width: "45%", marginTop: "10%" }}>
                 
                  <DrawerBody
                    style={{
                      fontSize: "2rem",
                      color: "gray",
                      marginTop: "2rem",
                    }}
                    

                  >
                  
                    <Stack spacing="24px">
                      <Box>
                        <ChakraLink as={RouterLink} to="/dashboard">
                          DashBoard
                        </ChakraLink>
                      </Box>

                      <Box>
                        <ChakraLink as={RouterLink} to="/loans">
                          Loans
                        </ChakraLink>
                      </Box>

                      <Box>
                        <ChakraLink as={RouterLink} to="/payment">
                          Payment
                        </ChakraLink>
                      </Box>

                      <Box>
                        <ChakraLink as={RouterLink} to="/calendar">
                          Calendar
                        </ChakraLink>
                      </Box>
                    </Stack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </BreadcrumbLink>
          </BreadcrumbItem>

          
          <Box >
            <Breadcrumb>
            <BreadcrumbItem>
            <a href="/dashboard">
              <img
                src={Logo3}
                alt="DashBoard"
                style={{ width: "10rem", height: "5rem" ,marginTop:"2rem"}}
              />{" "}
            </a>
          </BreadcrumbItem>
          </Breadcrumb>
                
        </Box>
         
      

          

         
        </Breadcrumb>
      </Box>
    </>
  );
};

export default SideNav;