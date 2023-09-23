import {
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
  Link as ChakraLink,
  Avatar,
  AvatarBadge,
  Input,
  Icon,
  Image,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { BellIcon } from "@chakra-ui/icons";
import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FcCalculator } from "react-icons/fc";
import { MdOutlinePayment } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCreditScore } from "react-icons/md";
import { logout } from "../config/firebase";
import Logo from "../assets/png/logo-no-background.png";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../slices/functionSlice";

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

function SearchBar() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    console.log(searchQuery);
    dispatch(setSearchQuery(searchQuery));
  };

  return (
    <InputGroup w="full" ms="auto">
      <InputRightElement pointerEvents="none">
        <AiOutlineSearch />
      </InputRightElement>
      <Input
        type="search"
        placeholder="Search..."
        onChange={handleSearch}
        _focusWithin={{ borderColor: "green", boxShadow: "none" }}
        bg="whiteAlpha.900"
      />
    </InputGroup>
  );
}


const Navigation = () => {
  
  return (
    <>
      <HStack w="full" spacing={10}>
        <SearchBar/>
        <HStack spacing={10}>
          <ChakraLink as={RouterLink} to="#">
            <BellIcon boxSize={8} />
          </ChakraLink>

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
            _hover={{ bg: "#FDFDFD85" }}
            m={2}
            onClick={onOpen}
          >
            <HiMenuAlt3 fontSize="2rem" />
          </Button>
        </Tooltip>
        <Text
          fontSize="xs"
          w="40%"
        >
          {greetText} {date}
        </Text>
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
        <DrawerContent bgColor="gray.100" px={{ xl: "12.5vw" }}>
          <Flex mt={4} align="center" px={5}>
            <Image src={Logo} boxSize="100px" objectFit="contain" />
            <Button
              variant="solid"
              bgGradient="linear(to-l,teal.400,teal.300,teal.200)"
              transition={"all 1000ms"}
              color="#FDFDFD"
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
            <Flex
              bg="#FDFDFD"
              p={1}
              rounded="lg"
              shadow="sm"
              border="2px"
              borderColor="gray.200"
            >
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
                    activeRoute === navItem.title ? navItem.color : "gray.600"
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
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideNav;
