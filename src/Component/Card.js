import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { TiArrowSyncOutline } from 'react-icons/ti';
import { MdPersonOutline } from 'react-icons/md';

function Card(props) {
    // toggle red and gray heart
    const [vaf , setVaf] = React.useState(false)
    function favr(){
        setVaf((prev)=>!prev)
    }

  return (
    <div className='bg-white p-1 sm:p-5 rounded-xl'>
        <div className='flex justify-between items-center'>
            <div className='font-semibold text-gray-800'>Porsche 718 cayman S</div>
            <div className='cursor-pointer' onClick={favr}>
                {vaf?<AiFillHeart className='text-red-600 '/>:
                <AiOutlineHeart className='text-gray-600' />}
            </div>
            
        </div>
        <div className='text-gray-600'>Coupe</div>
        <img className='m-auto' src={props.url} alt=''/>
        <div className='flex justify-between items-center'>
            <div className='flex justify-center items-center text-gray-600'>
                4
                <span><MdPersonOutline className='text-gray-600' /></span>
            </div>
            <div className='flex justify-center items-center text-gray-600'>
                <TiArrowSyncOutline className='text-gray-600'/>
                manual
            </div>
            <div></div>
            <div className='text-gray-800 font-bold'>
                $400
                <span className='text-gray-600 font-normal'>/d</span>
            </div>
        </div>
    </div>
  )
}

export default Card