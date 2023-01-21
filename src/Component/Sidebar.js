import React from 'react'
import { RxDashboard } from 'react-icons/rx';
import { GiSteeringWheel } from 'react-icons/gi';
import { AiFillCar } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';
import { BsCart2 } from 'react-icons/bs';
import { RiScissors2Line } from 'react-icons/ri';
import { RiCalendarTodoFill } from 'react-icons/ri';
import { BiMessageDetail } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { SlLogout } from 'react-icons/sl';
import logo from "../imgs/logo.png"
import { Link } from "react-router-dom"


function Sidebar(props) {

  // change the clicked element bg
  const [iconBg , setBg] = React.useState({dashboard:true})
  function changeBg(item){
    setBg({[item]: true})
  }


  return (
    <div className='w-4/12 sm:w-3/12 md:w-44 h-screen sticky top-0 bg-white'>
      <div className='flex justify-start items-center ml-4 mt-4'>
        <img src={logo} alt=''/>
        <p className='text-gray-800 ml-2'>Motive.</p>
      </div>
      <Link to="/">
        <div 
          onClick={()=>{props.click('Dashboard');changeBg("dashboard")}}
          style={{
            backgroundColor: iconBg.dashboard ? '#F5F4F6' : ''
          }}
          className='ml-6 p-1 mt-8 w-9/12 rounded flex justify-start items-center'
          >
          <RxDashboard
            className='text-gray-700'
          />
          <p className='text-gray-700 ml-2 text-xs sm:text-sm'>Dashboard</p>
        </div>
      </Link>
      <Link to="/booking">
        <div
          onClick={()=>{props.click('Booking');changeBg("booking")}}
          name="booking"
          style={{
            backgroundColor: iconBg.booking ? '#F5F4F6' : ''
          }} 
          className='ml-6 p-1 rounded w-9/12 mt-4 flex justify-start items-center'
        >
          <AiFillCar className='text-gray-700'/>
          <p className='text-gray-700 ml-2 text-xs sm:text-sm'>Booking</p>
        </div>
        </Link>
      <div className='ml-6 mt-4 flex justify-start items-center'>
        <GiSteeringWheel className='text-gray-700'/>
        <p className='text-gray-700 ml-2 text-xs sm:text-sm'>Assets</p>
      </div>

      <div className='ml-6 mt-4 flex justify-start items-center'>
        <BsBag className='text-gray-700'/>
        <p className='text-gray-700 ml-2 text-xs sm:text-sm'>Sell cars</p>
      </div>
      <div className='ml-6 mt-4 flex justify-start items-center'>
        <BsCart2 className='text-gray-700'/>
        <p className='text-gray-700 ml-2 text-xs sm:text-sm'>Buy cars</p>
      </div>
      <div className='ml-6 mt-4 flex justify-start items-center'>
        <RiScissors2Line className='text-gray-700'/>
        <p className='text-gray-700 ml-2 text-xs sm:text-sm'>Services</p>
      </div>
      <div className='ml-6 mt-4 flex justify-start items-center'>
        <RiCalendarTodoFill className='text-gray-700'/>
        <p className='text-gray-700 ml-2 text-xs sm:text-sm'>Calender</p>
      </div>
      <div className='ml-6 mt-4 flex justify-start items-center'>
        <BiMessageDetail className='text-gray-700'/>
        <p className='text-gray-700 ml-2 text-xs sm:text-sm'>Messages</p>
      </div>
      <div className='bottom-24 ml-6 mt-2 flex justify-start items-center absolute z-10'>
        <FiSettings className='text-gray-700'/>
        <p className='text-gray-700 ml-2 text-xs sm:text-sm'>Settings</p>
      </div>
      <div className='bottom-14 ml-6 mt-2 flex justify-start items-center absolute z-10 '>
        <SlLogout className='text-gray-700'/>
        <p className='text-gray-700 ml-2 text-xs sm:text-sm'>Log out</p>
      </div>
    </div>
  )
}

export default Sidebar