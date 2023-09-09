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
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { signIn } from "../../config/firebase";

function SignInForm() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = login;
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(login);
    setIsLoading(true);
    try {
      await signIn(email, password);
      setLogin({
        email: "",
        password: "",
      });
      toast({
        description: "Successfully Logged-in",
        duration: 3000,
        status: "success",
        colorScheme: "green",
      });
    } catch (error) {
      toast({
        description: "User Not Found",
        duration: 3000,
        status: "error",
        colorScheme: "red",
      });
      setError(true);
    }
    setIsLoading(false);
    navigate({ pathname: "/" });
  };

  return (
    <Box className="backgroundStyle">
      <Box p={4} className="formContainerStyle">
        <form onSubmit={handleSubmit} className="formStyle">
          <Center>
            <Heading as="h3" size="md" mb="10px">
              Login
            </Heading>
            {error && (
              <Text color="red.400" fontWeight="semibold">
                An Error has Occurred
              </Text>
            )}
          </Center>
          <Stack spacing={8}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              mb="0"
              isLoading={isLoading}
            >
              Sign In
            </Button>
            <Text fontSize="md">
              Not a member?
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
