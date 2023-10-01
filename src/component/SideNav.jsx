/* eslint-disable react/prop-types */
import {
  Button,
  Flex,
  Text,
  useToast,
  Icon,
  Image,
  Divider,
  Show,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FcCalculator } from "react-icons/fc";
import { MdOutlinePayment } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { MdCreditScore } from "react-icons/md";
import { logout } from "../config/firebase";
import Logo from "../assets/png/logo-no-background.png";

const navItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: <Icon as={RxDashboard} color="blue.500" />,
    color: "blue.500",
  },
  {
    title: "Payments",
    path: "payment",
    icon: <Icon as={MdOutlinePayment} color="orange.300" />,
    color: "orange.300",
  },
  {
    title: "Loans",
    path: "loans",
    icon: <FcCalculator />,
    color: "green.400",
  },
  {
    title: "Calendar",
    path: "calendar",
    icon: <Icon as={BsCalendar3} color="red.400" />,
    color: "red.400",
  },
  {
    title: "Credit Score",
    path: "creditScore",
    icon: <Icon as={MdCreditScore} color="cyan.400" />,
    color: "cyan.400",
  },
];

function SideNav({isOpen, onClose}) {
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
        variant: "left-accent",
        colorScheme: "teal",
      });
      navigate({ pathname: "/signin" });
    } catch (error) {
      toast({
        description: error.message,
        status: "error",
        duration: 4000,
        variant: "left-accent",
      });
    }
  };

  const [activeRoute, setActiveRoute] = useState(navItems[0].title);

  const handleRouteChange = (tab) => {
    setActiveRoute(tab);
  };

  return (
    <>
      <Show breakpoint="(min-width: 1380px)">
        <Flex
          bg="white"
          p={1}
          rounded="lg"
          shadow="md"
          flexDir="column"
          mx={5}
          minH="95vh"
          w="16.5%"
          gap={3}
          position="fixed"
        >
          <Image src={Logo} boxSize="80px" objectFit="contain" mx="auto" />
          <Divider />
          {navItems.map((navItem, index) => (
            <Flex
              key={index}
              as={Link}
              to={navItem.path}
              onClick={() => handleRouteChange(navItem.title)}
              textTransform="uppercase"
              bg={activeRoute === navItem.title ? "gray.200" : "transparent"}
              shadow={activeRoute === navItem.title ? "lg" : "none"}
              color={activeRoute === navItem.title ? navItem.color : "gray.600"}
              fontWeight={activeRoute === navItem.title ? "bold" : "semibold"}
              p={3}
              rounded="lg"
              fontSize="lg"
              gap={4}
              w="full"
            >
              {navItem.icon}
              <Text fontSize="sm">{navItem.title}</Text>
            </Flex>
          ))}
          <Button
            variant="solid"
            bgGradient="linear(to-l,teal.400,teal.300,teal.200)"
            transition={"all 1000ms"}
            color="#FDFDFD"
            type="submit"
            onClick={handleLogout}
            isLoading={isLoading}
            _hover={{ bg: "teal.400" }}
            mt="auto"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            shadow="lg"
          >
            Logout
          </Button>
        </Flex>
      </Show>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Flex
                bg="white"
                p={1}
                rounded="lg"
                flexDir="column"
                mx={5}
                h="95vh"
                gap={3}
              >
                <Image
                  src={Logo}
                  boxSize="80px"
                  objectFit="contain"
                  mx="auto"
                />
                <Divider />
                {navItems.map((navItem, index) => (
                  <Flex
                    key={index}
                    as={Link}
                    to={navItem.path}
                    onClick={() => handleRouteChange(navItem.title)}
                    textTransform="uppercase"
                    bg={
                      activeRoute === navItem.title ? "gray.200" : "transparent"
                    }
                    shadow={activeRoute === navItem.title ? "lg" : "none"}
                    color={
                      activeRoute === navItem.title ? navItem.color : "gray.600"
                    }
                    fontWeight={
                      activeRoute === navItem.title ? "bold" : "semibold"
                    }
                    p={3}
                    rounded="lg"
                    fontSize="lg"
                    gap={4}
                    w="full"
                  >
                    {navItem.icon}
                    <Text fontSize="sm">{navItem.title}</Text>
                  </Flex>
                ))}
                <Button
                  variant="solid"
                  bgGradient="linear(to-l,teal.400,teal.300,teal.200)"
                  transition={"all 1000ms"}
                  color="#FDFDFD"
                  type="submit"
                  onClick={handleLogout}
                  isLoading={isLoading}
                  _hover={{ bg: "teal.400" }}
                  mt="auto"
                  fontWeight="bold"
                  rounded="lg"
                  textTransform="uppercase"
                  shadow="lg"
                >
                  Logout
                </Button>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
    </>
  );
}

export default SideNav;
