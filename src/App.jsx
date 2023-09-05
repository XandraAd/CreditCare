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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route exact path="/" element={<RootLayout />}>
        <Route index element={<DashBoard />} />
        <Route exact path="loans" element={<Loans />} />
        <Route exact path="payment" element={<Payment />} />
        <Route exact path="calendar" element={<Calendar />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
