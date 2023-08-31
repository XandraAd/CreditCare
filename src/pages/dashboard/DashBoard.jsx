/* eslint-disable no-unused-vars */
import React from "react";
import {useEffect, useMemo, useState} from "react";
import {Outlet} from "react-router-dom";
import "./DashBoard.css";


const DashBoard = () => {
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
   <>  <div className='app flex' >
       
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
</div></>
  )
}

export default DashBoard






