/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Container } from '@chakra-ui/react';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container className='backgroundStyle'>
         <Box p={4} className='formContainerStyle'>
      <form onSubmit={handleSubmit} className='formStyle'>
        <Stack spacing={4}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
            />
          </FormControl>
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
          <Button type="submit" colorScheme="blue" size="lg">
            Sign Up
          </Button>
          
        </Stack>
      </form>
    </Box>
    </Container>
   
  );
}

export default SignUpForm;

