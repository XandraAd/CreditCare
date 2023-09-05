/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack , Container} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "./Signup.css" 




function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box className='backgroundStyle'>
       <Box p={4} className='formContainerStyle'>
      <form onSubmit={handleSubmit} className='formStyle'>
        <Stack spacing={4}>
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
            Sign In
          </Button>
          <h3>  Not a member?{' '}
            <Link to="/signup" className='signup_link'>Sign up now</Link>
             </h3>
        </Stack>
      </form>
    </Box>
    </Box>
   
  );
}

export default SignInForm;







