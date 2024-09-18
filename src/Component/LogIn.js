import React from 'react'
import { Link } from "react-router-dom"
import {Context} from "../contexts/Context"

function LogIn() {
    const {val , change} = React.useContext(Context)
    const usernameRegex = /^[a-zA-Z0-9]{2,}$/
    localStorage.setItem('userName', val)
  return (
    <div className='p-16 w-full h-[calc(100vh-40px)] flex flex-col justify-center  align-middle items-center text-center'>
        <p className=' sm:text-5xl mb-20 text-2xl text-purple-600 font-extrabold'>Welcome to ATTA's cars dashboard</p>
        <p className='  font-semibold text-gray-600'>Enter your name to log in</p>
        <form className='mt-8'>
            <input  className='bg-purple-300 p-1 mb-5 rounded-lg' value={val} onChange={change} ></input>
            {
            usernameRegex.test(val)&&
                <Link to="/main/dashboard">
                    <div className='rounded-lg text-center bg-gray-200 '>
                        <button >Log In</button>
                    </div>
                </Link>
            }
        </form>
    </div>
  )
}

export default LogIn