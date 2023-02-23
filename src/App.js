import React from "react";
import LogIn from "./Component/LogIn";
import Main from "./Component/Main";
import './App.css';
import { GiMultiDirections } from 'react-icons/gi';
import { Route, Routes } from "react-router-dom"
import { useLocation } from "react-router-dom"


function App() {
  const location = useLocation();

  return (
    <div className="bg-gray-100 p-2 ">
      <div className="flex justify-start items-center text-purple-600">
      <GiMultiDirections/>
      <p className="ml-1">
        {location.pathname === "/" || location.pathname === '/cars-react-new'?'Log In':location.pathname}
      </p>
      </div>
      <div>
      <Routes>
          <Route exact path="/" element={<LogIn />} />
          {/*backup page route for github-pages glitch */}
          <Route path="/cars-react-new" element={<LogIn />} />
          
          <Route path="/main/*" element={<Main />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;