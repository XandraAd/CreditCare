/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import SideNav from "../component/SideNav";
import {
  Flex,
  HStack,
  Link as ChakraLink,
  Avatar,
  AvatarBadge,
  InputGroup,
  InputRightElement,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { BellIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../slices/functionSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect, useMemo } from "react";

function SearchBar() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    console.log(searchQuery);
    dispatch(setSearchQuery(searchQuery));
  };

  return (
    <InputGroup w="25rem">
      <InputRightElement pointerEvents="none">
        <AiOutlineSearch />
      </InputRightElement>
      <Input
        type="search"
        placeholder="Search..."
        onChange={handleSearch}
        _focusWithin={{ borderColor: "blue.400", boxShadow: "none" }}
        bg="whiteAlpha.900"
      />
    </InputGroup>
  );
}

const Navigation = () => {
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
      <HStack>
        <Text fontSize="xs" fontWeight="bold">
          {greetText} {date}
        </Text>
        <Flex ms="auto" gap={5}>
          <SearchBar />
          <ChakraLink as={RouterLink} to="#">
            <BellIcon boxSize={8} />
          </ChakraLink>
          <Avatar boxSize="2rem">
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
        </Flex>
      </HStack>
    </>
  );
};

function RootLayout({ isAuthenticated }) {
  return (
    <>
      <Flex py={2}>
        {isAuthenticated && <SideNav />}
        <Box w="85%" ms="auto" pe={5}>
          <Navigation />
          {isAuthenticated && <Outlet />}
        </Box>
      </Flex>
    </>
  );
}

export default RootLayout;
