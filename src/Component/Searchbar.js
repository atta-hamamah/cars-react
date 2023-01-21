import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { TiBell } from 'react-icons/ti';
import port from "../imgs/potr.png"

function Searchbar() {
  return (
    <div className=' bg-white w-full px-2 py-1 flex justify-between items-center sticky top-0 '>
      <div className='flex rounded w-fit overflow-hidden '>
        <FiSearch className='text-gray-800 bg-gray-100 text-lg w-3/12 h-8 p-2'/>
        <input placeholder='Serch or Type' className='bg-gray-100 caret-orange-500 w-9/12 p-1 outline-none '></input> 
      </div>
      <div className='flex items-center w-24'>
          <div className='relative'>
            <TiBell className='text-gray-600 w-8 text-xl'/>
            <div className='absolute right-3 top-1 w-1 h-1 rounded-full bg-pink-700'></div>
          </div>

          <img className='ml-4 w-1/2 rounded-full' src={port} alt=''></img>
      </div>

    </div>
  )
}

export default Searchbar