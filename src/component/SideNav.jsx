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
  useToast,
  HStack,
  Container,
  Link as ChakraLink,
  Avatar,
  AvatarBadge,
  Input,
} from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { BellIcon } from "@chakra-ui/icons";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { CiCalculator1 } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { logout } from "../config/firebase";

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
  {
    title: "Credit Score",
    path: "creditScore",
    icon: <BsCalendar3 />,
  },
];

const Navigation = (onSearch) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };
  return (
    <>
      <HStack w="full" me="1.5rem" spacing={5}>
        <Container>
          <Flex alignItems="center">
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              bg="#FDFDFD"
            />
            <Button ml={2} onClick={handleSearch}>
              Search
            </Button>
          </Flex>
        </Container>
                      

        <Box>
          <ChakraLink as={RouterLink} to="#">
            <BellIcon boxSize={8} />
          </ChakraLink>
        </Box>
        <hr />
        <HStack>
          <Avatar boxSize="2rem">
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
        </HStack>
      </HStack>
    </>
  );
};


function SideNav() {
  const toast = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logout();
      setIsLoading(false);
      toast({
        description: "successfully logged-out",
        status: "success",
        duration: 4000,
        colorScheme: "green",
      });
      navigate({ pathname: "/signin" });
    } catch (error) {
      toast({
        description: error.message,
        status: "error",
        duration: 4000,
      });
    }
  };
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
      <Flex align="center">
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
        <Navigation/>
      </Flex>
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
            <Button
              colorScheme="blue"
              onClick={handleLogout}
              isLoading={isLoading}
            >
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideNav;
