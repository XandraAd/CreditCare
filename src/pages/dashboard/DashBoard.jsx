/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Divider,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import BarChart from "../../component/BarChart";
import { TbCurrencyCent } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineBriefcase } from "react-icons/hi";

const DashBoard = () => {
  return (
    <>
      <Box>
        <Grid mt={10} templateColumns="repeat(4, 1fr)" gap={5}>
          <GridItem bg="white" rounded="lg" p={3} shadow="md" h="8.25rem">
            <Flex align="center">
              <Icon
                as={TbCurrencyCent}
                bg="orange.300"
                color="white"
                p={2}
                fontSize="5xl"
                position="relative"
                top={-6}
                rounded="lg"
                shadow="lg"
              />
              <Box ms="auto">
                <Text fontSize="xs" color="gray.500">
                  Total Payments
                </Text>
                <Text fontSize="sm" fontWeight="bold" textAlign="end">
                  GHS 3000
                </Text>
              </Box>
            </Flex>
            <Divider />
            <Text fontSize="sm" color="gray.500" my={2}>
              <Text as="span" color="green.400" fontWeight="bold">
                +55%{" "}
              </Text>
              of total loans paid so far
            </Text>
          </GridItem>
          <GridItem bg="white" rounded="lg" p={3} shadow="md">
            <Flex align="center">
              <Icon
                as={GiReceiveMoney}
                bg="green.300"
                color="white"
                p={2}
                fontSize="5xl"
                position="relative"
                top={-6}
                rounded="lg"
                shadow="lg"
              />
              <Box ms="auto">
                <Text fontSize="xs" color="gray.500">
                  Total Loans
                </Text>
                <Text fontSize="sm" fontWeight="bold" textAlign="end">
                  GHS 6000
                </Text>
              </Box>
            </Flex>
            <Divider />
            <Text fontSize="sm" color="gray.500" my={2}>
              <Text as="span" color="red.400" fontWeight="bold">
                -55%{" "}
              </Text>
              from last week
            </Text>
          </GridItem>
          <GridItem bg="white" rounded="lg" p={3} shadow="md">
            <Flex align="center">
              <Icon
                as={GiMoneyStack}
                bg="red.300"
                color="white"
                p={2}
                fontSize="5xl"
                position="relative"
                top={-6}
                rounded="lg"
                shadow="lg"
              />
              <Box ms="auto">
                <Text fontSize="xs" color="gray.500">
                  Total Outstanding
                </Text>
                <Text fontSize="sm" fontWeight="bold" textAlign="end">
                  GHS 5000
                </Text>
              </Box>
            </Flex>
            <Divider />
            <Text fontSize="sm" color="gray.500" my={2}>
              <Text as="span" color="green.400" fontWeight="bold">
                +55%{" "}
              </Text>
              of total loans paid so far
            </Text>
          </GridItem>
          <GridItem bg="white" rounded="lg" p={3} shadow="md">
            <Flex align="center">
              <Icon
                as={HiOutlineBriefcase}
                bg="blue.300"
                color="white"
                p={2}
                fontSize="5xl"
                position="relative"
                top={-6}
                rounded="lg"
                shadow="lg"
              />
              <Box ms="auto">
                <Text fontSize="xs" color="gray.500">
                  Total Portfolios
                </Text>
                <Text fontSize="sm" fontWeight="bold" textAlign="end">
                  4
                </Text>
              </Box>
            </Flex>
            <Divider />
            <Text fontSize="sm" color="gray.500" my={2}>
              <Text as="span" color="green.400" fontWeight="bold">
                +55%{" "}
              </Text>
              of total loans paid so far
            </Text>
          </GridItem>
        </Grid>
        <Flex mt={10} gap={5}>
          <Box bg="white" p={3} rounded="lg" shadow="md">
            <BarChart bgGradient="linear(to-b,blue.500,blue.400,blue.300)" />
            <Text fontSize="sm" color="gray.500" fontWeight="bold">
              Weekly Payments
            </Text>
            <Divider my={2} />
            <Text fontSize="sm" color="gray.500">
              Lorem ipsum dolor sit amet.
            </Text>
          </Box>
          <Box bg="white" p={3} rounded="lg" shadow="md">
            <BarChart bgGradient="linear(to-b,green.400,green.300,green.200)" />
            <Text fontSize="sm" color="gray.500" fontWeight="bold">
              Monthly Payments
            </Text>
            <Divider my={2} />
            <Text fontSize="sm" color="gray.500">
              Repudiandae, illum amet.
            </Text>
          </Box>
          <Box bg="white" p={3} rounded="lg" shadow="md">
            <BarChart bgGradient="linear(to-b,red.500,red.400,red.300)" />
            <Text fontSize="sm" color="gray.500" fontWeight="bold">
              Total Loan
            </Text>
            <Divider my={2} />
            <Text fontSize="sm" color="gray.500">
              Consequuntur at omnis sit sunt.
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default DashBoard;
