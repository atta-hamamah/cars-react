import React from 'react'
import { RxDashboard } from 'react-icons/rx';
import { AiFillCar } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';
import { RiScissors2Line } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { SlLogout } from 'react-icons/sl';
import logo from "../imgs/logo.png"
import { Link } from "react-router-dom"
import { Context } from "../contexts/Context"



function Sidebar() {
  const { iconBg, changeBg } = React.useContext(Context)

  return (
    <div className='w-4/12 sm:w-3/12 md:w-44 h-screen sticky top-0 bg-white'>
      <div className='flex justify-start items-center ml-2 sm:ml-4 mt-4'>
        <img src={logo} alt='' />
        <p className='text-gray-800 ml-2'>Motive.</p>
      </div>
      <Link to="/main/dashboard">
        <div
          onClick={() => { changeBg("dashboard") }}
          style={{
            backgroundColor: iconBg.dashboard ? '#F5F4F6' : ''
          }}
          className='ml-2 sm:ml-6 p-1 mt-8 w-9/12 rounded flex justify-start items-center'
        >
          <RxDashboard
            className='text-gray-700'
          />
          <p className='text-gray-700 ml-2 text-xs sm:text-sm'>Dashboard</p>
        </div>
      </Link>
      <Link to="/main/booking">
        <div
          onClick={() => { changeBg("booking") }}
          name="booking"
          style={{
            backgroundColor: iconBg.booking ? '#F5F4F6' : ''
          }}
          className='ml-2 sm:ml-6 p-1 rounded w-9/12 mt-4 flex justify-start items-center'
        >
          <AiFillCar className='text-gray-700' />
          <p className='text-gray-700 ml-2 text-xs sm:text-sm'>Booking</p>
        </div>
      </Link>
      <Link to="/main/sell">
        <div
          onClick={() => { changeBg("sell") }}
          name="sell"
          style={{
            backgroundColor: iconBg.sell ? '#F5F4F6' : ''
          }}
          className='ml-2 sm:ml-6 p-1 rounded w-9/12 mt-4 flex justify-start items-center'
        >
          <BsBag className='text-gray-700' />
          <p className='text-gray-700 ml-2 text-xs sm:text-sm'>Sell cars</p>
        </div>
      </Link>

      <Link to="/main/for_sell">
        <div
          onClick={() => { changeBg("forsell") }}
          name="forsell"
          style={{
            backgroundColor: iconBg.forsell ? '#F5F4F6' : ''
          }}
          className='ml-2 sm:ml-6 p-1 rounded w-9/12 mt-4 flex justify-start items-center'
        >
          <AiOutlineShoppingCart className='text-gray-700' />
          <p className='text-gray-700 ml-2 text-xs sm:text-sm'>For sell</p>
        </div>
      </Link>

      <Link to="/main/services">
        <div
          onClick={() => { changeBg("services") }}
          name="services"
          style={{
            backgroundColor: iconBg.services ? '#F5F4F6' : ''
          }}
          className='ml-2 sm:ml-6 p-1 rounded w-9/12 mt-4 flex justify-start items-center'
        >
          <RiScissors2Line className='text-gray-700' />
          <p className='text-gray-700 ml-2 text-xs sm:text-sm'>Services</p>
        </div>
      </Link>

      <Link to="/">
        <div
          onClick={() => { localStorage.clear(); }}
          name="login"
          style={{
            backgroundColor: iconBg.login ? '#F5F4F6' : ''
          }}
          className='bottom-14 rounded p-1 w-9/12 ml-2 sm:ml-6 mt-2 flex justify-start items-center absolute z-10 '
        >
          <SlLogout className='text-gray-700' />
          <p className='text-gray-700 ml-2 text-xs sm:text-sm'>Log out</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar