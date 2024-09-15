import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { TiBell } from 'react-icons/ti';
import port from "../imgs/potr.png"
import { Context } from "../contexts/Context"


function Searchbar() {
  const { user, showUser, notes, showNotes } = React.useContext(Context)

  const value = localStorage.getItem('userName');
  return (
    <div className='  bg-white w-full px-2 py-1 flex justify-between items-center sticky top-0 '>
      <div className='flex rounded w-fit overflow-hidden -ml-2 '>
        <FiSearch className='text-gray-800 bg-gray-100 text-lg w-3/12 h-8 p-2' />
        <input placeholder='Serch or Type' className='bg-gray-100 caret-orange-500 w-9/12 p-1 outline-none '></input>
      </div>
      <div className='flex items-center relative w-24'>
        <div onClick={showNotes} className='relative cursor-pointer'>
          <TiBell className='text-gray-600 w-8 text-xl ' />
          <div className='absolute right-3 top-1 w-1 h-1 rounded-full bg-pink-700'></div>
          {notes &&
            <div className='font-bold p-2 right-2 text-center rounded-lg text-gray-800 absolute z-50 bg-gray-200'> you'r amazing</div>
          }
        </div>
        <div className='flex items-center relative w-24'>
          <img onClick={showUser} className='cursor-pointer ml-4 w-1/2 rounded-full' src={port} alt=''></img>
          {user &&
            <div className='font-bold p-2 right-12 text-center rounded-lg text-gray-800 absolute z-50 bg-gray-200'>{value}</div>
          }
        </div>

      </div>

    </div>
  )
}

export default Searchbar