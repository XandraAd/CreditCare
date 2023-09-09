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
  VStack,
  Stack,
  Heading,
  Select,
  Box,
  Container,
} from "@chakra-ui/react";

const Loans = () => {
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

  const loanTypes = [
    { label: "Loan Disbursed", value: "loanDisbursed" },
    { label: "Outstanding Debt", value: "outstandingDebt" },
    // You Can add more country codes as needed
  ];

  const payfrequencies = [
    { label: "Weekly", value: "weekly" },
    { label: "Monthly", value: "monthly" },
  ];

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleLoanDateChange = (e) => setLoanDate(e.target.value);
  const handLoanTypeChange = (e) => setLoanType(e.target.value);
  const handleEstPaymentChange = (e) => setEstPayment(e.target.value);
  const handleLoanAmountChange = (e) => setLoanAmount(e.target.value);
  const handleNextPaymentChange = (e) => setNextPayment(e.target.value);
  const handleAIntRateChange = (e) => setAIntRate(e.target.value);
  const handleTermChange = (e) => setTerm(e.target.value);
  const handleAStartDateChange = (e) => setStartDate(e.target.value);
  const handlePFrequencyChange = (e) => setPFrequency(e.target.value);

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
    setEstPayment(emi.toFixed(2)); // Rounded to 2 decimal places
  };

  return (
    <>
      <Flex flexDir="column" mt="6" alignItem="center" bg='green.100'>
        <Heading
          textTransform="uppercase"
          fontSize="2xl"
          m='0 auto'
          bgGradient="linear(to-r,cyan.700,cyan.500,teal.200)"
          bgClip="text"
        >
          Loan Data
        </Heading>
      </Flex>
      <Container
        bg="yellow"
        mt="2"
        borderColor="red"
        borderWidth="2px"
        borderRadius="10px"
        h="100vh"
      >
        <Flex flexDir="column" mt="6">
          <Center>
            <Flex flexDir="column">
              <Box bg="red">
                <HStack p="5px" mb="8px" bg="orange">
                  <Button
                    mt="5px"
                    p="8px"
                    mr="15px"
                    borderColor="rgba(255 255 255 0,75)"
                    borderWidth="2px"
                    borderRadius="10px"
                  >
                    <Text>Add New Loan</Text>
                  </Button>
                  <Button
                    mt="5px"
                    ml="15px"
                    p="8px"
                    borderColor="rgba(255 255 255 0,75)"
                    borderWidth="2px"
                    borderRadius="10px"
                  >
                    <Text>Save/Update Loan</Text>
                  </Button>
                </HStack>
              </Box>

              <Box bg="green" p="15px" h="85vh">
                <HStack>
                  <FormControl id="category" p="5px">
                    <FormLabel>Loan Name/Category:</FormLabel>
                    <Input
                      type="text"
                      value={category}
                      onChange={handleCategoryChange}
                    />
                  </FormControl>
                  <FormControl id="loanDate" p="5px">
                    <FormLabel>Loan Date:</FormLabel>
                    <Input
                      type="date"
                      value={loanDate}
                      onChange={handleLoanDateChange}
                    />
                  </FormControl>
                </HStack>
                <HStack>
                  <FormControl id="loanType" p="5px">
                    <FormLabel>loan Type:</FormLabel>
                    <Select
                      value={loanType}
                      onChange={handLoanTypeChange}
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
                    <FormLabel>loan Amount:</FormLabel>
                    <Input
                      type="number"
                      value={loanAmount}
                      onChange={handleLoanAmountChange}
                    />
                  </FormControl>
                </HStack>
                <HStack>
                  <FormControl id="aIntRate" p="5px">
                    <FormLabel>Annnual Int. Rate:</FormLabel>
                    <Input
                      type="number"
                      value={aIntRate}
                      onChange={handleAIntRateChange}
                    />
                  </FormControl>
                  <FormControl id="term" p="5px">
                    <FormLabel>Term(Years):</FormLabel>
                    <Input
                      type="number"
                      value={term}
                      onChange={handleTermChange}
                    />
                  </FormControl>
                </HStack>
                <HStack>
                  <FormControl id="pFrequency" p="5px">
                    <FormLabel>Pay Frequency:</FormLabel>
                    <Select
                      value={pFrequency}
                      onChange={handlePFrequencyChange}
                      placeholder="Loan Type"
                    >
                      {payfrequencies.map((frequency) => (
                        <option key={frequency.value} value={frequency.value}>
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
                      onChange={handleAStartDateChange}
                    />
                  </FormControl>
                </HStack>
                <HStack>
                  <FormControl id="estPayment" p="5px">
                    <FormLabel> Estimated Payment:</FormLabel>
                    <Input
                      type="number"
                      value={estPayment}
                      onChange={handleEstPaymentChange}
                    />
                  </FormControl>
                  <FormControl id="nextPayment" p="5px">
                    <FormLabel>Next Payment:</FormLabel>
                    <Input
                      type="date"
                      value={nextPayment}
                      onChange={handleNextPaymentChange}
                    />
                  </FormControl>
                </HStack>
              </Box>
            </Flex>
          </Center>
        </Flex>
      </Container>
    </>
  );
};

export default Loans;
