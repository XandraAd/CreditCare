/* eslint-disable no-unused-vars */
import {
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { useSelector } from "react-redux";

const tableHeadings = [
  "Loan ID",
  "Due Date",
  "Category",
  "Principal Amount",
  "Loan Amount",
  "Status",
  "Action",
];

const Payment = () => {
  const state = useSelector((state) => state.loanReducer.budget);
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex flexDir="column" mt="6" align="center">
        <Heading
          textTransform="uppercase"
          fontSize="2xl"
          m="0 auto"
          bgGradient="linear(to-r,cyan.700,cyan.500,teal.200)"
          bgClip="text"
        >
          Payment Data
        </Heading>
      </Flex>
      <Box w={{ xl: "75%" }} mx="auto" my={4}>
        <TableContainer bg="#FDFDFD" rounded="lg" shadow="lg">
          <Table>
            <Thead>
              <Tr>
                {tableHeadings.map((tableHeading) => (
                  <>
                    <Th textAlign="center">{tableHeading}</Th>
                  </>
                ))}
              </Tr>
            </Thead>
            <Tbody fontSize="xs">
              <Tr color="gray.500">
                {state.map((tableData) => (
                  <>
                    <Td key={tableData.id} textAlign="center">
                      {tableData.id}
                    </Td>
                    <Td textAlign="center">{tableData.endDate}</Td>
                    <Td textAlign="center" textTransform="uppercase">
                      {tableData.name}
                    </Td>
                    <Td textAlign="center">
                      ¢{parseFloat(tableData.loanAmount).toFixed(2)}
                    </Td>
                    <Td textAlign="center">
                      ¢{parseFloat(tableData.totalLoan).toFixed(2)}
                    </Td>
                    <Td>
                      <Text
                        bg="yellow.300"
                        textAlign="center"
                        px={2}
                        rounded="lg"
                        shadow="md"
                        textTransform="uppercase"
                        fontWeight="semibold"
                      >
                        {tableData.status}
                      </Text>
                    </Td>
                    <Td textAlign="center">
                      <Menu>
                        <MenuButton
                          as={IconButton}
                          aria-label="Options"
                          icon={<PiDotsThreeVerticalBold />}
                          variant="ghost"
                        />
                        <MenuList>
                          <MenuItem onClick={onOpen}>View Application</MenuItem>
                          <Divider/>
                          <MenuItem>Print</MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </>
                ))}
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Body here
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Payment;
