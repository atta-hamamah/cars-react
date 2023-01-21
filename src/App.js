import React from "react";
import Booking from "./Component/Booking";
import Dashboard from "./Component/Dashboard";
import Searchbar from "./Component/Searchbar";
import Sidebar from "./Component/Sidebar";
import './App.css';
import { GiMultiDirections } from 'react-icons/gi';
import { Route, Routes } from "react-router-dom"

//changing page tiele with navigation in the dashboarf
function App() {
  const [clicked, setCliked] = React.useState('Dashboard')
  function click(val){
    setCliked(val)
  }

  return (
    <div className="bg-gray-100 p-2 ">
      <div className="flex justify-start items-center text-purple-600">
      <GiMultiDirections/>
      <p className="ml-1">{clicked}</p>
      </div>
      
      <div className="w-full flex flex-wrap bg-gray-100 ">
        <Sidebar click={click} />
        <div className="w-8/12 sm:w-9/12 md:grow">
          <Searchbar/>
          <Routes>
            <Route exact path="/" element={<Dashboard/>} />
            <Route path="/booking" element={<Booking/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
