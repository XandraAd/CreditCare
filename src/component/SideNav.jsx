import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { CiCalculator1 } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

const navItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: <RxDashboard />,
  },
  {
    title: "Loans",
    path: "loans",
    icon: <CiCalculator1 />,
  },
  {
    title: "Payments",
    path: "payment",
    icon: <MdOutlinePayment />,
  },
  {
    title: "Calendar",
    path: "calendar",
    icon: <BsCalendar3 />,
  },
];

function SideNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [greetText, setGreetText] = useState("");
  const currentDate = useMemo(() => new Date(), []);
  const day = currentDate.toLocaleDateString("default", { weekday: "long" });
  const month = currentDate.toLocaleString("default", { month: "long" });
  const date = `${day}, ${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  useEffect(() => {
    let currentHour = currentDate.getHours();
    if (currentHour < 12) setGreetText("Good Morning!");
    else if (currentHour < 18) setGreetText("Good Afternoon!");
    else setGreetText("Good Evening!");
  }, [currentDate]);
  return (
    <>
      <Tooltip label="menu" hasArrow>
        <Button
          ref={btnRef}
          bg="transparent"
          _hover={{ bg: "#0062ff22" }}
          m={2}
          onClick={onOpen}
        >
          <HiMenuAlt3 fontSize="2rem" />
        </Button>
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{ base: "full", lg: "xs" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Credit Care</DrawerHeader>

          <DrawerBody mt={10}>
            {navItems.map((navItem, index) => (
              <Flex
                key={index}
                as={Link}
                to={navItem.path}
                onClick={() => onClose()}
                mb={2}
                fontSize="2xl"
                _hover={{ bgColor: "#0062ff22" }}
                p={3}
                rounded="lg"
                align="center"
                gap={4}
              >
                {navItem.icon}
                {navItem.title}
              </Flex>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Box fontSize="xs" me="auto">
              <Text>{greetText}</Text>
              <Text>{date}</Text>
            </Box>
            <Button colorScheme="blue">Logout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideNav;
