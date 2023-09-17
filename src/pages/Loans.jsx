/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Flex,
  Button,
  Text,
  Input,
  HStack,
  Heading,
  Select,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Icon,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { FiEdit3 } from "react-icons/fi";
import { BsPlusLg, BsCarFront } from "react-icons/bs";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  addFunction,
  calculatePaymentEstimate,
  calculateTotalLoan,
  updateFunction,
} from "../slices/functionSlice";
import { MdDashboard } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { FcHome, FcBusiness } from "react-icons/fc";

function LoanCard({ onEditBudget, searchQuery }) {
  const state = useSelector((state) => {
    return state.loanReducer.budget;
  });

  const tabNames = [
    {
      name: "All",
      icon: <Icon as={MdDashboard} color="purple.400" />,
      color: "purple.400",
      bgTransparent: "purple.100",
    },
    {
      name: "Peer to Peer",
      icon: <Icon as={IoMdPeople} color="blue.300" />,
      color: "blue.400",
      bgTransparent: "blue.100",
    },
    {
      name: "Car Loan",
      icon: <Icon as={BsCarFront} color="green.400" />,
      color: "green.400",
      bgTransparent: "green.100",
    },
    {
      name: "Home Loan",
      icon: <Icon as={FcHome} />,
      color: "pink.500",
      bgTransparent: "#d53f8c2e",
    },
    {
      name: "Business Loan",
      icon: <Icon as={FcBusiness} />,
      color: "green.700",
      bgTransparent: "#38a16954",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabNames[0].name);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabs = () => {
    return tabNames.map((category, index) => (
      <Flex
        key={index}
        onClick={() => handleTabChange(category.name)}
        cursor="pointer"
        fontWeight={activeTab === category.name ? "bold" : "semibold"}
        color={activeTab === category.name ? category.color : "gray.400"}
        borderBottom={
          activeTab === category.name ? "2px solid teal.300" : "none"
        }
        bg={activeTab === category.name ? "gray.100" : "transparent"}
        shadow={activeTab === category.name ? "md" : "none"}
        w="full"
        textTransform="uppercase"
        p={3}
        rounded="lg"
        transition="background-color 400ms"
        align="center"
        fontSize="lg"
        justify="center"
        gap={4}
      >
        {category.icon}
        <Text fontSize="sm">{category.name}</Text>
      </Flex>
    ));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalLoan());
  }, [dispatch]);

  const filteredLoans =
    activeTab === "All"
      ? state
      : state.filter((loan) => loan.name === activeTab);

  return (
    <>
      <Box w={{ base: "full", xl: "75%" }} mx="auto">
        <HStack bg="#FDFDFD" p={1} rounded="lg" shadow="sm" my={4}>
          {renderTabs()}
        </HStack>
        {filteredLoans.length === 0 ? (
          <>
            <Flex justify="center" align="center" h="50vh" flexDir="column">
              <Box
                fontSize="4xl"
                px={4}
                pt={2}
                rounded="full"
                bg="#FDFDFD"
                shadow="md"
              >
                {tabNames.map((icon) => {
                  return <>{icon.name === activeTab ? icon.icon : null}</>;
                })}
              </Box>
              <Text
                textTransform="uppercase"
                mt={4}
                fontSize="sm"
                fontWeight="semibold"
                color="gray.400"
              >
                No loan portfolio in this category.
              </Text>
            </Flex>
          </>
        ) : (
          <Flex flexDir={{ base: "column", lg: "row" }} gap={8} flexWrap="wrap">
            {filteredLoans.map((loan) => {
              return (
                <Box
                  w="16rem"
                  h="18.25rem"
                  rounded="xl"
                  ms={2}
                  bg="#FDFDFD"
                  mt={2}
                  key={loan.id}
                >
                  <Box p={4}>
                    <Text
                      fontSize={"sm"}
                      color="gray.400"
                      fontWeight="semibold"
                      textTransform="capitalize"
                    >
                      Estimated {loan.paymentFrequency} Payment
                    </Text>
                    <Flex gap={5} align="center" fontSize="lg" lineHeight={8}>
                      <Text
                        bgGradient="linear(to-r,cyan.700,cyan.500,teal.300)"
                        bgClip="text"
                        fontWeight="semibold"
                      >
                        {loan.paymentEstimate}
                      </Text>
                      <Text color="gray.400" fontWeight="semibold" ms="auto">
                        GHS
                      </Text>
                    </Flex>
                    <Divider my={1} />
                    <Text
                      fontSize={"sm"}
                      color="gray.400"
                      fontWeight="semibold"
                    >
                      Total Loan
                    </Text>
                    <Flex gap={5} align="center" fontSize="lg" lineHeight={8}>
                      <Text
                        bgGradient="linear(to-r,cyan.700,cyan.500,teal.300)"
                        bgClip="text"
                        fontWeight="semibold"
                      >
                        {parseFloat(loan.totalLoan).toFixed(2)}
                      </Text>
                      <Text color="gray.400" fontWeight="semibold" ms="auto">
                        GHS
                      </Text>
                    </Flex>
                    <Divider my={1} />
                    <Text
                      fontSize={"sm"}
                      color="gray.400"
                      fontWeight="semibold"
                    >
                      Principal Loan
                    </Text>
                    <Flex gap={5} align="center" fontSize="lg" lineHeight={8}>
                      <Text
                        bgGradient="linear(to-r,cyan.700,cyan.500,teal.300)"
                        bgClip="text"
                        fontWeight="semibold"
                      >
                        {parseFloat(loan.loanAmount).toFixed(2)}
                      </Text>
                      <Text color="gray.400" fontWeight="semibold" ms="auto">
                        GHS
                      </Text>
                    </Flex>
                    <Divider my={1} />
                    <Text
                      fontSize={"sm"}
                      color="gray.400"
                      fontWeight="semibold"
                    >
                      Interest Rate Per Year
                    </Text>
                    <Flex gap={5} align="center" fontSize="lg" lineHeight={8}>
                      <Text
                        bgGradient="linear(to-r,cyan.700,cyan.500,teal.300)"
                        bgClip="text"
                        fontWeight="semibold"
                      >
                        {loan.loanRate}
                      </Text>
                      <Text color="gray.400" fontWeight="semibold" ms="auto">
                        %
                      </Text>
                    </Flex>
                    <Divider my={1} />
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
                        me={2}
                        cursor="pointer"
                        onClick={() => onEditBudget(loan)}
                      />
                    </Flex>
                  </Box>
                </Box>
              );
            })}
          </Flex>
        )}
      </Box>
    </>
  );
}

function ModalForm({
  closeForm,
  initialData,
  onSubmit,
  dispatchTotalLoan,
  dispatchPaymentEstimate,
}) {

  const [budgetData, setBudgetData] = useState(
    initialData || {
      id: nanoid(),
      name: "",
      loanType: "",
      loanAmount: "",
      loanRate: "",
      paymentFrequency: "",
      startDate: "",
      endDate: "",
      totalLoan: 0,
      paymentEstimate: 0,
      status: "Pending",
      loanPaid: 0,
    }
  );

  const handleChange = (e) => {
    e.preventDefault();
    setBudgetData({
      ...budgetData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeForm();
    if (budgetData.name.trim() === "" && budgetData.amount.trim() === "") {
      return;
    }
    dispatchTotalLoan(budgetData);
    dispatchPaymentEstimate(budgetData);
    onSubmit(budgetData);
  };

  const loanTypes = [
    { label: "Loan Disbursed", value: "loanDisbursed" },
    { label: "Outstanding Debt", value: "outstandingDebt" },
  ];

  const payfrequencies = [
    { label: "Weekly", value: "Weekly" },
    { label: "Monthly", value: "Monthly" },
  ];

  const toast = useToast();

  return (
    <Box as="form" my="2" p={5} onSubmit={handleSubmit}>
      <HStack>
        <FormControl id="name">
          <FormLabel>Loan Name/Category:</FormLabel>
          <Input
            type="text"
            name="name"
            value={budgetData.name}
            onChange={handleChange}
            placeholder="Peer to Peer, Car Loan, Home Loan etc."
          />
        </FormControl>
      </HStack>
      <HStack gap={5} mt={4}>
        <FormControl id="loanType">
          <FormLabel>Loan Type:</FormLabel>
          <Select
            value={budgetData.loanType}
            onChange={handleChange}
            placeholder="Loan Type"
            name="loanType"
          >
            {loanTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="loanAmount">
          <FormLabel>Loan Amount:</FormLabel>
          <Input
            type="number"
            name="loanAmount"
            value={budgetData.loanAmount}
            onChange={handleChange}
          />
        </FormControl>
      </HStack>
      <HStack mt={4} gap={5}>
        <FormControl id="loanRate">
          <FormLabel>Interest Rate Per Year:</FormLabel>
          <Input
            type="number"
            name="loanRate"
            value={budgetData.loanRate}
            onChange={handleChange}
            placeholder="%"
          />
        </FormControl>
        <FormControl id="pFrequency">
          <FormLabel>Pay Frequency:</FormLabel>
          <Select
            value={budgetData.paymentFrequency}
            onChange={handleChange}
            name="paymentFrequency"
            placeholder="Weekly / Monthly"
          >
            {payfrequencies.map((frequency) => (
              <option key={frequency.value} value={frequency.value}>
                {frequency.label}
              </option>
            ))}
          </Select>
        </FormControl>
      </HStack>
      <HStack mt={4} gap={5}>
        <FormControl id="startDate">
          <FormLabel>Start Date:</FormLabel>
          <Input
            type="date"
            value={budgetData.startDate}
            onChange={handleChange}
            name="startDate"
          />
        </FormControl>
        <FormControl id="endDate">
          <FormLabel>End Date:</FormLabel>
          <Input
            type="date"
            value={budgetData.endDate}
            onChange={handleChange}
            name="endDate"
          />
        </FormControl>
      </HStack>
      <HStack mt={4}>
        <Button
          variant="solid"
          bgGradient="linear(to-r,teal.400,teal.300,teal.200)"
          transition={"all 1500ms"}
          color="gray.50"
          type="submit"
          _hover={{ bg: "teal.400" }}
          ms="auto"
          fontWeight="bold"
          rounded="full"
        >
          Submit
        </Button>
      </HStack>
    </Box>
  );
}

const Loans = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBudget, setSelectedBudget] = useState(null); // editing loan card

  const handleEditBudget = (budget) => {
    setSelectedBudget(budget); // prefilling form with existing loan information
    onOpen();
  };

  const dispatch = useDispatch();

  const toast = useToast();

  const handleUpdateBudget = (updatedBudget) => {
    if (selectedBudget) {
      const updatedBudgetData = {
        ...selectedBudget,
        ...updatedBudget,
      };
      dispatch(updateFunction(updatedBudgetData)); // Handle update
      toast({
        title: "Portfolio Updated",
        description: "Your portfolio has been updated successfully.",
        status: "success",
        colorScheme: "teal",
        variant: "left-accent",
        position: "bottom-right",
        duration: 5000,
        isClosable: true,
      });
    } else {
      dispatch(addFunction(updatedBudget)); // Handle add
      toast({
        title: "Portfolio Added",
        description: "Your portfolio has been added successfully.",
        status: "success",
        duration: 5000,
        colorScheme: "teal",
        variant: "left-accent",
        position: "bottom-right",
        isClosable: true,
      });
    }
    dispatch(calculateTotalLoan(updatedBudget));
    dispatch(calculatePaymentEstimate(updatedBudget));
    onClose();
  };

  // const handleAddBudget = () => {
  //   setSelectedBudget(null); // Clear selectedBudget when opening for adding
  //   onOpen();
  // };

  //  use effect hook is an alternative approach for settling time conflict and persistence
  //  caused by the edit form resetting onClose. this is because we are using the same form for handling
  //  both edit and adding budget data.
  useEffect(() => {
    if (!isOpen) {
      setSelectedBudget(null); // Reset selectedBudget when modal is closed
    }
  }, [isOpen]);

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
          Loan Data
        </Heading>
      </Flex>

      <Flex h="70vh" flexDir="column" mx={8}>
        <LoanCard onEditBudget={handleEditBudget} />
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

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mx="auto">
            {selectedBudget ? "Edit Loan Portfolio" : "Add Loan Portfolio"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalForm
              initialData={selectedBudget}
              closeForm={onClose}
              onSubmit={handleUpdateBudget}
              dispatchTotalLoan={calculateTotalLoan}
              dispatchPaymentEstimate={calculatePaymentEstimate}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Loans;
