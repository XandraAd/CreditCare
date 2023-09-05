/* eslint-disable no-unused-vars */
import React from "react";
/*import Footer from "./component/Footer";*/
import DashBoard from "./pages/dashboard/DashBoard";
import Loans from "./pages/Loans";
import Payment from "./pages/Payment";
import Calendar from "./pages/Calendar";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import SignInForm from "./pages/signup/SignInForm";
import SignUpForm from "./pages/signup/SignUpForm";


function App() { 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route exact path="/" element={<RootLayout />}>
        <Route index element={<DashBoard />} />
        <Route exact path="loans" element={<Loans />} />
        <Route exact path="payment" element={<Payment />} />
        <Route exact path="calendar" element={<Calendar />} />
      </Route>
      
      <Route exact path="signIn" element={<SignInForm/>}/>
      <Route exact path="signUp" element={<SignUpForm/>}/>
      </>
    )
  );
  return <RouterProvider router={router} />;
  
}

export default App;
