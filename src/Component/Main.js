import React from 'react'
import Booking from "./Booking";
import Dashboard from "./Dashboard";
import Sell from "./Sell";
import Services from "./Services";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
import ForSell from './ForSell';
import { Route, Routes } from "react-router-dom"

function Main(props) {
  return (
    <div className="w-full flex flex-wrap bg-gray-100 ">
      <Sidebar click={props.click} />
      <div className="w-8/12 sm:w-9/12 md:grow">
        <Searchbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/services" element={<Services />} />
          <Route path="/for_sell" element={<ForSell />} />
        </Routes>
      </div>
    </div>
  )
}

export default Main