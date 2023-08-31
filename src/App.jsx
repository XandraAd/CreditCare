/* eslint-disable no-unused-vars */
import React from "react";
import SideNav from "./component/SideNav";
/*import Footer from "./component/Footer";*/
import DashBoard from "./pages/dashboard/DashBoard"
import Loans from "./pages/Loans";
import Payment from "./pages/Payment";
import Calendar from "./pages/Calendar";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./component/Navigation";




function App() {

  
 
  return (
    <>
      <ChakraProvider>
        <CSSReset />
    
<Navigation/>

<SideNav />

        <Routes>
          <Route exact path="/" element={<DashBoard />}></Route>
          <Route exact path="/loans" element={<Loans />}></Route>
          <Route exact path="/payment" element={<Payment />}></Route>
          <Route exact path="/calendar" element={<Calendar />}></Route>
        </Routes>
        
      {/* <Footer />*/}
      </ChakraProvider>
    </>
  );
}

export default App;


