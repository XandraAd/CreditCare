/* eslint-disable no-unused-vars */
import React from "react";
import {
  Heading,
  Flex,
  Stack,
  HStack,
  Box,
  Text,
  Link,
  VStack,
  Card,
  CardBody,
  Image,
  Divider,
} from "@chakra-ui/react";
import Eclipse from "../assets/images/iPhone 11 Pro/eclipse.jpg";

const CreditScore = () => {
  return (
    <>
    <Box >
      <Flex >
        <Box bg="cyan.200" w="100%" >
          <Flex
            w="100%"
            bg="rgba(0, 0, 0, 0.92)"
            color="white"
            flexDir="column"
            h="100%"
          >
            <Heading
              textTransform="uppercase"
              fontSize="lg"
              flexDir="column"
              ml="15px"
              mt="25px"
              bgGradient="linear(to-r,cyan.700,cyan.500,teal.200)"
              bgClip="text"
            >
              Your credit score
            </Heading>
            <Flex>
              <Stack>
                <HStack p="6">
                  <Box
                    mt="5px"
                    p="5px"
                    borderColor="rgba(255 255 255 0,75)"
                    borderWidth="2px"
                    borderRadius="10px"
                  >
                    <Text as={Link}>Credit Score</Text>
                  </Box>
                  <Box
                    mt="5px"
                    p="5px"
                    borderColor="rgba(255 255 255 0,75)"
                    borderWidth="2px"
                    borderRadius="10px"
                  >
                    <Text as={Link}>Credit Advance</Text>
                  </Box>
                </HStack>

                <VStack>
                  <Box>
                    <Card maxW="sm" bg="rgba(0, 0, 0, 0.92)" color="#38A169">
                      <CardBody>
                        <Image src={Eclipse} alt="moon eclipse" />
                        <Flex flexDir="column">
                          <Heading size="md">Nerd 👍</Heading>
                          <Text fontSize="md" mt="5">
                            **Features will be added later**
                          </Text>
                          <Divider mt="5" />
                          <Text mt="4" color="teal.600" fontSize="xs">
                            You will be able to tell your credit score and how to improve it.
                          </Text>
                        </Flex>
                      </CardBody>
                    </Card>
                  </Box>
                </VStack>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
      
      
    </>
  );
};

export default CreditScore;
