/* eslint-disable no-unused-vars */
import React,{useEffect, useMemo, useState} from "react";
import SideNav from "./component/SideNav";
/*import Footer from "./component/Footer";*/
import DashBoard from "./pages/dashboard/DashBoard"
import Loans from "./pages/Loans";
import Payment from "./pages/Payment";
import Calendar from "./pages/Calendar";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes , Outlet} from "react-router-dom";

function App() {
  const [greetText, setGreetText] = useState("");
  const currentDate = useMemo(() => new Date(), []);
  const day = currentDate.toLocaleDateString('default', {weekday: 'long'});
  const month = currentDate.toLocaleString('default', {month: 'long'});
  const date = `${day}, ${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;



  useEffect(() => {
    let currentHour = currentDate.getHours();
    if(currentHour < 12) setGreetText("Good Morning!")
    else if(currentHour < 18) setGreetText("Good Afternoon!");
    else setGreetText("Good Evening!");
  },[currentDate])
  return (
    <>
      <ChakraProvider>
      <div className='app flex' >
       
        <div className='app-main'>
        <header className="header w-100 flex align-center justify-center">
    <div className="container ">
    <div className="header-content text-white py-3 flex flex-col items-center justify-center">
        <div className='greetings'>
          <h3 className='fw-6'>{greetText}</h3>
        </div>
        <div className='date justify-center'>
          <span  className="text-uppercase fs-13 fw-4">{date}</span>
        </div>
      </div>
    </div>
  </header>
  <div className='notes-wrapper py-4 px-4'>
    <Outlet />
  </div>
</div>
</div>
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


