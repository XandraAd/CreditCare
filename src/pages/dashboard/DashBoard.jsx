/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  Flex,
  Card,
  CardHeader,
  CardBody,
  HStack,
  Stack,
  VStack,
  Link,
  Image,
  Divider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import "./DashBoard.css";
import BarChart from "../../component/BarChart";
import Eclipse from "../../assets/images/eclipse.jpg";

const DashBoard = () => {
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
      <Box h="100vh">
        <Flex flexDir="row" overflow="hidden" maxW="2000px">
          {/*COLUMN 1
          <Flex w="17%" flexDir="column"  bg="#F5F5F5"></Flex>*/}

          {/*COLUMN 2*/}
          <Flex w="100%" flexDir="column" minH="100vh" alignItems="center">
            <Box bg="cyan.400" w="100%" minH="8%">
              <Flex fontWeight="bold" display="inline-flex">
                <Heading
                  letterSpacing="-2%"
                  fontSize="18px"
                  p="10px"
                  alignItems="center"
                  noOfLines={1}
                >
                  {greetText} {date}
                </Heading>
              </Flex>
            </Box>
            <Box w="100%" minH="8%">
              <Flex fontWeight="bold" display="inline-flex">
                <Heading
                  letterSpacing="-2%"
                  fontSize="18px"
                  p="16px"
                  alignItems="center"
                  justifyContent="center"
                  textTransform="uppercase"
                  noOfLines={1}
                >
                  Accounts
                </Heading>
              </Flex>
            </Box>
            <Stack spacing="24px">
              <HStack spacing="24px">
                <Flex
                  w="100%"
                  h="200px"
                  borderRadius="10px"
                  borderWidth="2px"
                  borderColor="purple.400"
                  boxShadow="4px 2px 10px rgba(0, 0, 0, 0.78)"
                >
                  <Card align="center" size="lg">
                    <CardHeader>
                      <Heading fontSize="sm" textTransform="uppercase">
                        Total Loan Disbursed
                      </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>Ghc 25000</Text>
                    </CardBody>
                  </Card>
                </Flex>

                <Flex
                  w="100%"
                  h="200px"
                  borderRadius="10px"
                  borderWidth="2px"
                  borderColor="green.400"
                  boxShadow="4px 2px 10px rgba(0, 0, 0, 0.78)"
                >
                  <Card align="center" size="lg" bg="green.200">
                    <CardHeader>
                      <Heading fontSize="sm" textTransform="uppercase">
                        Total Interest Earned
                      </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>Ghc 5000</Text>
                    </CardBody>
                  </Card>
                </Flex>

                <Flex
                  w="100%"
                  h="200px"
                  borderRadius="10px"
                  borderWidth="2px"
                  borderColor="orange.400"
                  boxShadow="4px 2px 10px rgba(0, 0, 0, 0.78)"
                >
                  <Card align="center" size="lg">
                    <CardHeader>
                      <Heading fontSize="sm" textTransform="uppercase">
                        Total Outstanding Debt
                      </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>Ghc 125000</Text>
                    </CardBody>
                  </Card>
                </Flex>
                <Flex
                  w="100%"
                  h="200px"
                  borderRadius="10px"
                  borderWidth="2px"
                  borderColor="blue.400"
                  boxShadow="4px 2px 10px rgba(0, 0, 0, 0.78)"
                >
                  <Card align="center" size="lg" bg="cyan.100">
                    <CardHeader>
                      <Heading fontSize="sm" textTransform="uppercase">
                        Total interest Paid
                      </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>Ghc 25000</Text>
                    </CardBody>
                  </Card>
                </Flex>
              </HStack>
            </Stack>
            <Flex
              flexDir="row"
              paddingBlock="20px"
              justifyContent="space-evenly"
              w="100%"
            >
              <Flex h="80vh" justifyContent="space-between" mt="8">
                <Box
                  h="400px"
                  w="500px"
                  borderWidth="2px"
                  borderColor="olive"
                  boxShadow="4px 4px 10px rgba(0, 0, 0, 0.78)"
                  borderRadius="10px"
                  p="4"
                >
                  <Heading
                    p="4"
                    alignItems="center"
                    textTransform="uppercase"
                    letterSpacing="tight"
                  >
                    Analytics
                  </Heading>
                  <BarChart />
                </Box>
              </Flex>
              <Flex h="80vh" mt="8">
                <Box
                  h="400px"
                  w="500px"
                  borderWidth="2px"
                  borderColor="olive"
                  boxShadow="4px 4px 10px rgba(0, 0, 0, 0.78)"
                  borderRadius="10px"
                  p="4"
                >
                  <Heading
                    p="4"
                    alignItems="center"
                    textTransform="uppercase"
                    letterSpacing="tight"
                  >
                    Scheduled Payments
                  </Heading>
                  <Text display="flex-end" fontSize="small" color="gray" ml="4">
                    {month} {currentDate.getFullYear()}
                  </Text>
                  <Divider />
                  <Flex flexDir="column">
                    <Flex>
                      <TableContainer>
                        <Table variant="striped" colorScheme="cyan">
                          <TableCaption>Transaction payments</TableCaption>
                          <Thead>
                            <Tr>
                              <Th>Name Of transaction</Th>
                              <Th>Category</Th>
                              <Th>Date</Th>
                              <Th isNumeric>Amount</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td>Outstanding Debt</Td>
                              <Td>Personal Loan</Td>
                              <Td>3rd</Td>
                              <Td isNumeric> Ghc 25.4</Td>
                            </Tr>
                            <Tr>
                              <Td>Outstanding Debt</Td>
                              <Td>Home loan</Td>
                              <Td>7rd</Td>
                              <Td isNumeric> Ghc 30.48</Td>
                            </Tr>
                            <Tr>
                              <Td>Loan Disbursed</Td>
                              <Td>Business Loan</Td>
                              <Td>3rd</Td>
                              <Td isNumeric> Ghc 900</Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Flex>

          {/*COLUMN 3*/}

          <Flex
            w="25%"
            bg="rgba(0, 0, 0, 0.92)"
            color="white"
            flexDir="column"
            h="25%"
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
                  <Box v="100%">
                    <Card maxW="sm" bg="rgba(0, 0, 0, 0.92)" color="#38A169">
                      <CardBody>
                        <Image src={Eclipse} alt="moon eclipse" />
                        <Flex flexDir="column">
                          <Heading size="md">Nerd 👍</Heading>
                          <Text fontSize="md" mt="5">
                            Generated 18th July VantageScore 3.0 credit score by
                            equifax
                          </Text>
                          <Divider mt="5" />
                          <Text mt="4" color="teal.600" fontSize="xs">
                            You are using a lot of your available credit
                          </Text>
                        </Flex>
                      </CardBody>
                    </Card>
                  </Box>
                </VStack>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default DashBoard;
