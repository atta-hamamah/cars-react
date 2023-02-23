import React from 'react'
import Card from './Card';
import { RxDashboard } from 'react-icons/rx';
import {AiOutlineControl} from 'react-icons/ai';
import {Context} from "../contexts/Context"
import img1 from '../imgs/1.png';
import img2 from '../imgs/2.png';
import img3 from '../imgs/3.png';
import img4 from '../imgs/4.png';
import img5 from '../imgs/5.png';
import img6 from '../imgs/6.png';
import img7 from '../imgs/7.png';
import img8 from '../imgs/8.png';
import img9 from '../imgs/9.png';




function Booking() {
  
  const {bookData, bookChange} = React.useContext(Context)

  return (
    <div className='w-full bg-gray-100 p-2 md:p-6 '>
      <p className='font-bold m-4 text-4xl text-gray-800'>Booking</p>
      <div className='flex justify-between items-center w-full mb-4 '>
        <form>
        <select className='rounded-2xl mr-2'
                value={bookData.carStatus}
                onChange={bookChange}
                name="carStatus"
            >
                <option value="">Status</option>
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="old">old</option>
            </select>
        <select className='rounded-2xl'
                value={bookData.carType}
                onChange={bookChange}
                name="carType"
            >
                <option value="">Type</option>
                <option value="cadillac">CADILLAC</option>
                <option value="maserati">MASERATI</option>
                <option value="audi">AUDI</option>
                <option value="porsche">PORSCHE</option>
            </select>
        </form>
      </div>
      <div className='grid gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-6 '>
        <Card url={img1}/>
        <Card url={img2}/>
        <Card url={img3}/>
        <Card url={img4}/>
        <Card url={img5}/>
        <Card url={img6}/>
        <Card url={img7}/>
        <Card url={img8}/>
        <Card url={img9}/>
      </div>
    </div>
  )
}

export default Booking