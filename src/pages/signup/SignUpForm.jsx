/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack,HStack,Select, Heading,Center,Text, Checkbox } from '@chakra-ui/react';
import "./Signup.css" 




function SignUpForm() {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const[telephone,setTelephone]=useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);



  const countryCodes = [
    { label: '+233', value: '233' },
    { label: '+44', value: '44' },
    { label: '+1', value: '1' },
    { label: '+234', value: '234' },
    // You Can add more country codes as needed
  ];
  

  const handleFirstNameChange = (e) => setFName(e.target.value);
  const handleLastNameChange = (e) => setLName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCountryCodeChange = (e) => setCountryCode(e.target.value);
  const handleTelephoneChange=(e) =>setTelephone(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordConfirmationChange = (e) => setPasswordConfirmation(e.target.value);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      // Passwords don't match, show an error message or take appropriate action
      prompt('Passwords do not match');
      console.log('Passwords do not match');
    } 
    else {
    const fullPhoneNumber = `+${countryCode} ${telephone}`;
    // Add your sign-up logic here
    console.log('FName:', fname);
    console.log('LName:', lname);
    console.log('Email:', email);
    console.log('Telephone:', fullPhoneNumber);
    console.log('Password:', password);
    }

    
  };

  return (
    <Box className='backgroundStyle'>
     
         <Box p={4} className='formContainerStyle'>
      <form onSubmit={handleSubmit} className='formStyle'>
        <Center>
        <Heading as='h3' size='md' mb='10px'>
        Sign Up
      </Heading>
        </Center>
    
      <Stack spacing={8}>
         <HStack >
         <FormControl id="fname">
            <FormLabel className='sr-only'> First Name</FormLabel>
            <Input 
              type="text"
              value={fname}
              onChange={handleFirstNameChange}
              placeholder="First Name*" 
            />
            </FormControl>
            <FormControl id="lname" isRequired>
              <FormLabel className='sr-only'>Last Name</FormLabel>
            <Input
              type="text"
              value={lname}
              onChange={handleLastNameChange}
              placeholder="Last Name*"
            />
          </FormControl>
          </HStack>
          
          
          <FormControl id="email" isRequired>
            <FormLabel className='sr-only'>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email*"
            />
          </FormControl>
          <HStack>
          <FormControl id="countryCode" isRequired>
  <FormLabel 
  className='sr-only'
  w="80px" 
  ml={0} 
 >
    Country Code
  </FormLabel>
  <Select  
    value={countryCode}
    onChange={handleCountryCodeChange}
    placeholder="Country Code"
  >
    {countryCodes.map((code) => (
      <option key={code.value} value={code.value}>
        {code.label}
      </option>
    ))}
  </Select>
</FormControl>

          <FormControl id="telephone" isRequired>
  <FormLabel className='sr-only'>Telephone</FormLabel>
  <Input
    type="tel"  
    value={telephone}
    onChange={handleTelephoneChange}
    placeholder="Telephone number*"
  />
</FormControl>
          </HStack>
        

          <FormControl id="password" isRequired>
            <FormLabel className='sr-only'>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
          </FormControl>
          <FormControl id="passwordConfirmation" isRequired>
  <FormLabel className='sr-only'>Confirm Password</FormLabel>
  <Input
    type="password"
    value={passwordConfirmation}
    onChange={handlePasswordConfirmationChange}
    placeholder="Confirm your password"
  />
</FormControl>

          <Button type="submit" colorScheme="blue" size="lg"
            disabled={!isCheckboxChecked}>
            Submit
          </Button>
          <Checkbox 
          colorScheme='green' 
          defaultChecked = {isCheckboxChecked}
          onChange={handleCheckboxChange} >
          <Text fontSize='xs'>
          By tapping submit, you agree to CreditCare Privacy Policy and Terms & Conditions
          </Text>
          </Checkbox>
        </Stack>
      </form>
    </Box>
    </Box>
   
  );
}

export default SignUpForm;

