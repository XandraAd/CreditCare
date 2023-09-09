/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { HStack, Box,Container, Link as ChakraLink, Avatar, AvatarBadge, Input, Button,Flex } from "@chakra-ui/react"
import { NavLink as RouterLink } from "react-router-dom";
import { BellIcon, HamburgerIcon } from '@chakra-ui/icons';


const Navigation = (onSearch) => {
    const[searchTerm,setSearchTerm] =useState("");

    const handleSearch = () => {
        onSearch(searchTerm)
    }
  return (
    <>
      <HStack spacing="24px">
        <Container>
        <Flex alignItems="center">
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button ml={2} onClick={handleSearch}>
        Search
      </Button>
    </Flex>
        </Container>
                      

                      <Box>
                        <ChakraLink as={RouterLink} to="#">
                          <BellIcon boxSize={8}/>
                        </ChakraLink>
                      </Box>
                      <hr />
                      <HStack>
                      <Avatar>
    <AvatarBadge boxSize='1.25em' bg='green.500' />
  </Avatar>
                      </HStack>

                    </HStack></>
  )
}

export default Navigation