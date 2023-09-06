/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Center,
  Checkbox,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Signup.css";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState("false");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box className="backgroundStyle">
      <Box p={4} className="formContainerStyle">
        <form onSubmit={handleSubmit} className="formStyle">
          <Center>
            <Heading as="h3" size="md" mb="10px">
              Login
            </Heading>
          </Center>
          <Stack spacing={8}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
              />
            </FormControl>
            
            <Button type="submit" colorScheme="blue" size="lg" mb="0">
              Submit
            </Button>
            <Box>
            <Flex flexDirection="column" alignItems="flex-end">
              <Text fontSize="md" mt={0}>
                Forgot {""}
                <Link to="/password" style={{ color: "blue" }}>
                  Password?
                </Link>
              </Text>
            </Flex>
            </Box>

            

            <Checkbox
              colorScheme="green"
              defaultChecked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            >
              <Text fontSize="xs">Remember Me</Text>
            </Checkbox>
            <Text fontSize="md">
              {" "}
              Not a member?{" "}
              <Link to="/signup" className="signup_link">
                Sign up now
              </Link>
            </Text>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default SignInForm;
