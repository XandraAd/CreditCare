import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
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
  Heading,
  Icon,
} from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { BellIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FcCalculator } from "react-icons/fc";
import { MdOutlinePayment } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { logout } from "../config/firebase";

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
    icon: <Icon as={BsCalendar3} color="cyan.400" />,
    color: "cyan.400",
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [activeRoute, setActiveRoute] = useState(navItems[0].title);

  const handleRouteChange = (tab) => {
    setActiveRoute(tab);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <>
      <Flex align="center" mt={5} w={{ xl: "75%" }} mx="auto">
        <Tooltip label="menu" hasArrow>
          <Button
            ref={btnRef}
            bg="transparent"
            _hover={{ bg: "#FDFDFD85" }}
            m={2}
            onClick={onOpen}
          >
            <HiMenuAlt3 fontSize="2rem" />
          </Button>
        </Tooltip>
        <Navigation />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{ base: "full", lg: "xs" }}
      >
        <DrawerOverlay
          backdropFilter="blur(8px)"
          backgroundColor="rgba(0, 0, 0, 0.5)"
        />
        <DrawerContent bgColor="gray.100" px={{xl: "12.5vw"}}>
          <Flex mt={4} align="center" px={5}>
            <Heading
              fontSize="2xl"
              textTransform="uppercase"
              bgGradient="linear(to-r,cyan.700,cyan.500,teal.300)"
              bgClip="text"
            >
              Credit Care
            </Heading>
            <Button
              variant="solid"
              bgGradient="linear(to-r,teal.400,teal.300,teal.200)"
              transition={"all 1500ms"}
              color="gray.50"
              type="submit"
              onClick={handleLogout}
              isLoading={isLoading}
              _hover={{ bg: "teal.400" }}
              ms="auto"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              shadow="lg"
            >
              Logout
            </Button>
          </Flex>

          <DrawerBody>
            <Flex bg="#FDFDFD" mt={5} p={1} rounded="lg" shadow="sm" border="2px" borderColor="gray.200">
              {navItems.map((navItem, index) => (
                <Flex
                  key={index}
                  as={Link}
                  to={navItem.path}
                  onClick={() => handleRouteChange(navItem.title)}
                  textTransform="uppercase"
                  bg={
                    activeRoute === navItem.title ? "gray.100" : "transparent"
                  }
                  shadow={activeRoute === navItem.title ? "xl" : "none"}
                  color={
                    activeRoute === navItem.title ? navItem.color : "gray.400"
                  }
                  fontWeight={
                    activeRoute === navItem.title ? "bold" : "semibold"
                  }
                  p={3}
                  rounded="lg"
                  align="center"
                  fontSize="lg"
                  justify="center"
                  gap={4}
                  w="full"
                >
                  {navItem.icon}
                  <Text fontSize="sm">{navItem.title}</Text>
                </Flex>
              ))}
            </Flex>
          </DrawerBody>

          {/* <DrawerFooter>
            <Box fontSize="xs" me="auto">
              <Text>{greetText}</Text>
              <Text>{date}</Text>
            </Box>
            
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideNav;
