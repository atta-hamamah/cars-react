import React from 'react'
import { TbArrowsRandom } from 'react-icons/tb';
import { TbArrowsRightLeft } from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';
import { BsLightningCharge } from 'react-icons/bs';

function DashCar(props) {
  return (
    <div className='p-2 sm:p-4'>
      <div className='flex justify-start items-center text-gray-800 font-bold'>
        <TbArrowsRandom className='text-gray-700 mr-2'/>
        {`${props.recommend} Recommend`}
      </div>
      <img className='m-auto' src={props.url} alt=''/>
      <p className='text-lg font-bold text-gray-800'>{props.name}</p>
      <div className='flex justify-between items-center text-gray-700 '>
        <TbArrowsRightLeft className='text-gray-700'/>
        {props.price}
        <FiSettings className='text-gray-700'/>
        <BsLightningCharge className='text-gray-700'/>
        <div></div>
        <div></div>
        {props.rate}
      </div>
    </div>
    
  )
}

export default DashCar