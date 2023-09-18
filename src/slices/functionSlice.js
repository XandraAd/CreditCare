import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  budget: [],
  enabledCardId: null,
  isBudgetButtonEnabled: false,
  totalBudget: 0,
  totalFinancedBudget: 0,
  hasPaid: false,
  searchQuery: "",
  //other states...
};

export const updateLoanPercentage = (payload) => ({
  type: 'budgetExpense/updateLoanPercentage',
  payload,
});

export const addFinanceData = (payload) => {
  return {
    type: 'budgetExpense/addFinanceData',
    payload,
  };
};

export const setSearchQuery = (searchQuery) => ({
  type: 'budgetExpense/setSearchQuery',
  payload: searchQuery,
});

const functionSlice = createSlice({
  name: "budgetExpense",
  initialState,
  reducers: {
    addFinanceData: (state, action) => {
      const { budgetId, financeData } = action.payload;
      const budget = state.budget.find((budget) => budget.id === budgetId);

      if (budget) {
        budget.finance += financeData.financeAmount;
        if (!budget.financeDetails) {
          budget.financeDetails = []; // Initialize if financeDetails doesn't exist
        }
        budget.financeDetails.push(financeData);
      }
    },
    updateLoanPercentage: (state, action) => {
      const { id, percentage } = action.payload;
      const budgetItem = state.budget.find((budget) => budget.id === id);
      if (budgetItem) {
        budgetItem.loanPercentagePaid = percentage;
      }
    },
    updateHasPaid: (state, action) => {
      state.hasPaid = action.payload;
    },
    updateStatus: (state, action) => {
      state.budget.status = action.payload;
    },
    enableCard: (state, action) => {
      state.enabledCardId = action.payload;
      state.isBudgetButtonEnabled = true;
    },
    clearEnabledCard: (state) => {
      state.enabledCardId = null;
      state.isBudgetButtonEnabled = false;
    },
    addFunction: (state, action) => {
      state.budget = [...state.budget, action.payload];
    },
    updateFunction: (state, action) => {
      state.budget = state.budget.map((budget) =>
        budget.id === action.payload.id ? action.payload : budget
      );
    },
    deleteFunction: (state, action) => {
      state.budget = state.budget.filter(
        (budget) => budget.id !== action.payload
      );
      console.log("budget deleted");
    },
    calculateTotalBudget: (state) => {
      state.totalBudget = state.budget.reduce(
        (total, budget) => total + parseInt(budget.amount),
        0
      );
    },
    calculateTotalFinancedBudget: (state) => {
      state.totalFinancedBudget = state.budget.reduce(
        (total, budget) => total + parseInt(budget.finance),
        0
      );
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    calculateTotalLoan: (state) => {
      state.budget.forEach((budget) => {
        const principal = parseFloat(budget.loanAmount);
        const rate = parseFloat(budget.loanRate) / 100 / 12;
        (budget.totalLoan) = principal + principal * rate;
        // console.log(`Calculating total loan for budget ${budget.totalLoan}`);
      });
    },
    calculatePaymentEstimate: (state) => {
      state.budget.forEach((budget) => {
        if (budget.paymentFrequency === "Weekly") {
          budget.paymentEstimate = (budget.totalLoan / 52).toFixed(2);
        } else {
          budget.paymentEstimate = (budget.totalLoan / 12).toFixed(2);
        }
        // console.log(`Calculating payment estimate for budget ${budget.paymentEstimate}`);
        // console.log(`Payment Frequency: ${budget.paymentFrequency}`)
      });
    },
    //   other actions..
  },
});

export const {
  addFunction,
  updateFunction,
  deleteFunction,
  enableCard,
  updateHasPaid,
  updateStatus,
  clearEnabledCard,
  enableBudgetButton,
  disableBudgetButton,
  calculateTotalBudget,
  calculateTotalFinancedBudget,
  calculateTotalLoan,
  calculatePaymentEstimate,
} = functionSlice.actions;

export default functionSlice.reducer;
