import React from 'react'
import { Link } from "react-router-dom"
import {Context} from "../contexts/Context"


function Services() {
  const {changeBg} = React.useContext(Context)
  return (
    <div className='sm:p-4'>
      <div className='font-bold ml-2 text-4xl text-gray-800'>Services</div>
        <div className='p-2 ml-2 sm:ml-8 flex flex-wrap '>
          <Link to="/main/dashboard">
            <div 
              className='bg-purple-400 mt-4 sm:mt-14 p-4 rounded-md hover:shadow-lg hover:shadow-purple-800/50'
              onClick={()=>{changeBg("dashboard")}}
            >
              <p className='font-bold text-gray-800 text-lg '>Dashboard</p>
              <p className='font-bold ml-2 text-gray-600 text-sm'>
                showing Cars Statistics and general information 
                about cars usage and status and many other information
                such as energy , range , break fluid ,
                tire wear and pricing 
              </p>
            </div>
          </Link>
          <Link to="/main/booking">
            <div 
              onClick={()=>{changeBg("booking")}}
              className='bg-purple-400 mt-4 sm:mt-14 p-4 rounded-md hover:shadow-lg hover:shadow-purple-800/50'
            >
              <p className='font-bold text-gray-800 text-lg '>Booking</p>
              <p className='font-bold ml-2 text-gray-600 text-sm'>
                view available cars provided and toggle on the heart icon to 
                choose your favorite, all cars 
                include some of the basic information
              </p>
            </div>
          </Link>
          <Link to="/main/sell">
            <div
              onClick={()=>{changeBg("sell")}}
              className='bg-purple-400 mt-4 sm:mt-14 p-4 rounded-md hover:shadow-lg hover:shadow-purple-800/50'
            >
              <p className='font-bold text-gray-800 text-lg '>Sell Cars</p>
              <p className='font-bold ml-2 text-gray-600 text-sm'>
                click on every input to inter all of the needed information for the car to
                  be added to cars offered for sell
              </p>
            </div>
          </Link>
          <Link to="/main/for_sell">
            <div 
              onClick={()=>{changeBg("forsell")}}
              className='bg-purple-400 mt-4 sm:mt-14 p-4 rounded-md hover:shadow-lg hover:shadow-purple-800/50'
            >
              <p className='font-bold text-gray-800 text-lg '>For Sell</p>
              <p className='font-bold ml-2 text-gray-600 text-sm'>
                list of cars added for sell by customers you can check all the offered car 
                and directly communicate with the seller
              </p>
            </div>
          </Link>
        </div> 
    </div>

  )
}

export default Services