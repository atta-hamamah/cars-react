import React from 'react'
import { Link } from "react-router-dom"
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Context } from '../contexts/Context';

function ForSell() {
  const { changeBg } = React.useContext(Context)
  const { setSubm } = React.useContext(Context)

  function removSellingInfo() {
    localStorage.removeItem('sellerName')
    localStorage.removeItem('carType')
    localStorage.removeItem('email')
    localStorage.removeItem('phone')
    localStorage.removeItem('price')
    localStorage.removeItem('negotiation')
    localStorage.removeItem('extraInfo')
    localStorage.removeItem('image')
    setSubm(false)
    console.log(localStorage.getItem('sellerName'))
  }
  return (
    <>
      <div className='sm:p-4'>
        <div className='font-bold ml-2 mt-2 text-2xl text-gray-800'>Cars for sell</div>
        {!localStorage.getItem('email') &&
          <div className='text-gray-700 p-8 text-sm sm:text-lg mt-8 rounded-lg border-2 text-center border-purple-600 border-dashed '>
            Currently no cars added for sell , click
            <Link to="/main/sell">
              <span onClick={() => { changeBg("sell") }} className=' text-purple-600 font-bold ml-1 '>here</span>
            </Link> to add a Car
          </div>
        }
        {
          localStorage.getItem('email') &&
          <div className=' bg-purple-400 p-2 w-full rounded-lg ml-2 mt-4 relative'>
            <div className=' absolute top-1 right-3 w-fit rounded-full p-2 bg-purple-200 hover:bg-purple-800 cursor-pointer'>
              <RiDeleteBin6Line onClick={removSellingInfo} />
            </div>
            <div className=' grid grid-cols-1 text-xs text-gray-800'>
              <div className='font-bold'>Seller Name:
                <span className=' text-white font-normal'> {localStorage.getItem('sellerName')}</span>
              </div>
              <div className='font-bold'>Car Type:
                <span className=' text-white font-normal'> {localStorage.getItem('carType')}</span>
              </div>
              <div className='font-bold'>Seller Email:
                <span className=' text-white font-normal'> {localStorage.getItem('email')}</span>
              </div>
              <div className='font-bold'>Seller Phone:
                <span className=' text-white font-normal'> {localStorage.getItem('phone')}</span>
              </div>
              <div className='font-bold'>Car's Price:
                <span className=' text-white font-normal'>$ {localStorage.getItem('price')}</span>
              </div>
              <div className='font-bold'>Price negotiation:
                <span className=' text-white font-normal'> {localStorage.getItem('negotiation') ? 'YES' : 'NO'}</span>
              </div>
              <div className='font-bold'>more information:
                <p className=' text-white font-normal'> {localStorage.getItem('extraInfo')}</p>
              </div>
            </div>
            <div className='p-2 rounded-lg border-2 mt-2 border-purple-600 border-dashed relative '>
              <img
                className=' w-full h-72 rounded-md'
                src={localStorage.getItem('image')} alt=""
              />
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default ForSell