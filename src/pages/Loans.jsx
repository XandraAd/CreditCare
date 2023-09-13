/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Flex,
  Button,
  Text,
  Input,
  Center,
  HStack,
  Heading,
  Select,
  Box,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { FiEdit3 } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";


function EditForm() {
  return (
    <>
      <Box>
        <CircularProgressBar
          colorCircle="#EDF2F7"
          colorSlice="#9BE9E2"
          cut={30}
          percent={75}
          rotation={144}
          round={true}
        />
      </Box>
    </>
  );
}

function LoanCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box w="16rem" h="16rem" rounded="lg" ms={2} bg="#FDFDFD" mt={2}>
        <Box p={4}>
          <Text fontSize={"sm"} color="gray.400" fontWeight="semibold">
            Estimated Payment
          </Text>
          <Flex gap={5} align="center" fontSize="lg" lineHeight={8}>
            <Text
              bgGradient="linear(to-r,cyan.700,cyan.500,teal.300)"
              bgClip="text"
              fontWeight="semibold"
            >
              4515.00
            </Text>
            <Text color="gray.400" fontWeight="semibold" ms="auto">
              GHS
            </Text>
          </Flex>
          <Text fontSize={"sm"} color="gray.400" fontWeight="semibold">
            Principal Amount
          </Text>
          <Flex gap={5} align="center" fontSize="lg" lineHeight={8}>
            <Text
              bgGradient="linear(to-r,cyan.700,cyan.500,teal.300)"
              bgClip="text"
              fontWeight="semibold"
            >
              4200
            </Text>
            <Text color="gray.400" fontWeight="semibold" ms="auto">
              GHS
            </Text>
          </Flex>
          <Text fontSize={"sm"} color="gray.400" fontWeight="semibold">
            Interest Rate
          </Text>
          <Flex gap={5} align="center" fontSize="lg" lineHeight={8}>
            <Text
              bgGradient="linear(to-r,cyan.700,cyan.500,teal.300)"
              bgClip="text"
              fontWeight="semibold"
            >
              7.5
            </Text>
            <Text color="gray.400" fontWeight="semibold" ms="auto">
              %
            </Text>
          </Flex>
          <Text fontSize={"sm"} color="gray.400" fontWeight="semibold">
            Loan Category
          </Text>
          <Flex gap={5} align="center" fontSize="xl" lineHeight={8}>
            <Text
              bgGradient="linear(to-r,cyan.700,cyan.500,teal.300)"
              bgClip="text"
              fontWeight="semibold"
            >
              Peer to Peer
            </Text>
          </Flex>
          <Flex>
            <Icon
              as={FiEdit3}
              color="#FDFDFD"
              bgGradient="linear(to-l,teal.100,teal.200,teal.300)"
              fontSize="6xl"
              rounded="full"
              p={1}
              border="8px"
              borderColor="gray.100"
              ms="auto"
              cursor="pointer"
              onClick={onOpen}
            />
          </Flex>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mx="auto">Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx="auto">
            <EditForm />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const Loans = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [category, setCategory] = useState("");
  const [loanDate, setLoanDate] = useState("");
  const [loanType, setLoanType] = useState("");
  const [estPayment, setEstPayment] = useState(0);
  const [nextPayment, setNextPayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [aIntRate, setAIntRate] = useState("");
  const [term, setTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [pFrequency, setPFrequency] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
  };

  const loanTypes = [
    { label: "Loan Disbursed", value: "loanDisbursed" },
    { label: "Outstanding Debt", value: "outstandingDebt" },
  ];

  const payfrequencies = [
    { label: "Weekly", value: "weekly" },
    { label: "Monthly", value: "monthly" },
  ];

  // Define the calculateEMI function
  const calculateEMI = () => {
    // Calculate EMI based on your loan calculation logic
    const principal = parseFloat(loanAmount);
    const rateOfInterest = parseFloat(aIntRate) / 100 / 12; // Monthly interest rate
    const numberOfPayments = parseFloat(term) * 12; // Total number of payments

    const emi =
      (principal *
        rateOfInterest *
        Math.pow(1 + rateOfInterest, numberOfPayments)) /
      (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);

    // Set the calculated EMI to the estPayment state
    setEstPayment(Number.parseFloat(emi).toFixed(2)); // Rounded to 2 decimal places
  };

  return (
    <>
      <Flex flexDir="column" mt="6" alignItem="center">
        <Heading
          textTransform="uppercase"
          fontSize="2xl"
          m="0 auto"
          bgGradient="linear(to-r,cyan.700,cyan.500,teal.200)"
          bgClip="text"
        >
          Loan Data
        </Heading>
      </Flex>

      <Flex h="70vh" flexDir="column" mx={8}>
        <LoanCard />
        <Icon
          as={BsPlusLg}
          onClick={onOpen}
          fontSize="5xl"
          rounded="full"
          borderColor="#F8F8F8"
          color="#FDFDFD"
          bgGradient="linear(to-l,teal.100,teal.200,teal.300)"
          cursor="pointer"
          shadow="lg"
          ms="auto"
          mt="auto"
        />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container
              mt="2"
              borderColor="red"
              borderWidth="2px"
              borderRadius="10px"
            >
              <Flex flexDir="column" mt="6">
                <Center>
                  <Flex flexDir="column">
                    <Box p="15px">
                      <HStack>
                        <FormControl id="category" p="5px">
                          <FormLabel>Loan Name/Category:</FormLabel>
                          <Input
                            type="text"
                            value={category}
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl id="loanDate" p="5px">
                          <FormLabel>Loan Date:</FormLabel>
                          <Input
                            type="date"
                            value={loanDate}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </HStack>
                      <HStack>
                        <FormControl id="loanType" p="5px">
                          <FormLabel>loan Type:</FormLabel>
                          <Select
                            value={loanType}
                            onChange={handleChange}
                            placeholder="Loan Type"
                          >
                            {loanTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </Select>
                        </FormControl>
                        <FormControl id="loanAmount" p="5px">
                          <FormLabel>Loan Amount:</FormLabel>
                          <Input
                            type="number"
                            value={loanAmount}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </HStack>
                      <HStack>
                        <FormControl id="aIntRate" p="5px">
                          <FormLabel>Annual Int. Rate:</FormLabel>
                          <Input
                            type="number"
                            value={aIntRate}
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl id="term" p="5px">
                          <FormLabel>Term(Years):</FormLabel>
                          <Input
                            type="number"
                            value={term}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </HStack>
                      <HStack>
                        <FormControl id="pFrequency" p="5px">
                          <FormLabel>Pay Frequency:</FormLabel>
                          <Select
                            value={pFrequency}
                            onChange={handleChange}
                            placeholder="Loan Type"
                          >
                            {payfrequencies.map((frequency) => (
                              <option
                                key={frequency.value}
                                value={frequency.value}
                              >
                                {frequency.label}
                              </option>
                            ))}
                          </Select>
                        </FormControl>
                        <FormControl id="startDate" p="5px">
                          <FormLabel>Start Date:</FormLabel>
                          <Input
                            type="date"
                            value={startDate}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </HStack>
                      <HStack>
                        <FormControl id="estPayment" p="5px">
                          <FormLabel> Estimated Payment:</FormLabel>
                          <Input
                            type="number"
                            value={estPayment}
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl id="nextPayment" p="5px">
                          <FormLabel>Next Payment:</FormLabel>
                          <Input
                            type="date"
                            value={nextPayment}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </HStack>
                    </Box>
                  </Flex>
                </Center>
              </Flex>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Loans;
