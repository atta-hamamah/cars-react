import React from 'react'
import DashCar from './DashCar'
import img10 from '../imgs/10.png'
import img11 from '../imgs/11.png'
import img12 from '../imgs/12.png'
import img15 from '../imgs/15.png'
import img16 from '../imgs/16.png'
import img17 from '../imgs/17.png'
import img18 from '../imgs/18.png'
import { BsLightningChargeFill } from 'react-icons/bs';
import { FaArrowsAltV } from 'react-icons/fa';
import { IoIosWater } from 'react-icons/io';
import { GiCartwheel } from 'react-icons/gi';
import BarChart from './BarChart'
import LineChart from './LineChart'

export default function Dashboard() {
  return (
    <div className='p-2 sm:p-4 md:p-6 lg:p-10'>
      {/*car states ........ */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-10 md:grid-cols-4'>
        <div className='flex flex-col  justify-center gap-4 p-2 rounded-2xl items-center align-middle bg-purple-600'>
          <div className='rounded-full bg-purple-500 w-8 h-8 flex justify-center items-center mt-2'>
            <BsLightningChargeFill className='text-white' />
          </div>
          <p className='text-white font-bold'>Energy</p>
          <img className='mt-4' src={img15} alt='' />
        </div>
        <div className='flex flex-col  justify-center gap-4 p-2 rounded-2xl items-center align-middle bg-white'>
          <div className='rounded-full bg-pink-100 w-8 h-8 flex justify-center items-center mt-2'>
            <FaArrowsAltV className='text-pink-600' />
          </div>
          <p className='text-gray-800 font-bold'>Range</p>
          <img className='mt-4' src={img16} alt='' />
        </div>
        <div className='flex flex-col  justify-center gap-4 p-2 rounded-2xl items-center align-middle bg-white'>
          <div className='rounded-full bg-purple-100 w-8 h-8 flex justify-center items-center mt-2'>
            <IoIosWater className='text-purple-500' />
          </div>
          <p className='text-gray-800 font-bold'>Break fluid</p>
          <img className='mt-4' src={img17} alt='' />
        </div>
        <div className='flex flex-col  justify-center gap-4 p-2 rounded-2xl items-center align-middle bg-white'>
          <div className='rounded-full bg-pink-100  w-8 h-8 flex justify-center items-center mt-2'>
            <GiCartwheel className='text-yellow-400' />
          </div>
          <p className='text-gray-800 font-bold'>Tire Wear</p>
          <img className='mt-4' src={img18} alt='' />
        </div>
      </div>

      {/* Charts............. */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6'>
        <div className='bg-white px-2 sm:px-6 rounded-xl py-2 mt-6'>
          <div className='font-bold text-lg mb-5 text-gray-800'>
            Miles
            <span className=' ml-1 font-normal'>Statistics</span>
          </div>
          <div className='flex justify-between items-center flex-nowrap'>
            <div className='flex justify-center items-center'>
              <div className='text-white sm:px-3 sm:mr-2 text-sm rounded-3xl bg-blue-600 px-1'>Day</div>
              <div className='px-1 sm:px-2 sm:mr-3 text-sm text-gray-800'>Week</div>
              <div className='px-1  text-sm text-gray-800'>Monthe</div>
            </div>
            <div className='text-sm sm:text-normal flex flex-wrap justify-center items-center text-gray-800'>256 Miles</div>
          </div>
          <div className=''>
            <BarChart />
          </div>
        </div>
        <div className='bg-white px-2 sm:px-6 rounded-xl py-2 mt-6'>
          <div className='font-bold text-lg mb-5 text-gray-800'>
            Car
            <span className=' ml-1 font-normal'>Statistics</span>
          </div>
          <div className='flex flex-row-reverse justify-between items-center flex-nowrap'>
            <div className='flex justify-center items-center'>
              <div className='text-white sm:px-3 sm:mr-2 text-sm rounded-3xl bg-orange-600 px-1'>Day</div>
              <div className='px-1 sm:px-2 sm:mr-3 text-sm text-gray-800'>Week</div>
              <div className='px-1  text-sm text-gray-800'>Monthe</div>
            </div>
            <div className='text-sm sm:text-normal flex flex-wrap justify-center items-center text-gray-800'>20 February 2022</div>
          </div>
          <div className=''>
            <LineChart />
          </div>
        </div>
      </div>

      {/* car cards.......... */}
      <div className='mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-6'>
        <div className='cssbg rounded-2xl  w-full '>
          <DashCar
            recommend={'64%'}
            url={img10}
            name={'Mini Cooper'}
            price={'132K'}
            rate={'$32/h'}
          />
        </div>
        <div className='bg-green-200 rounded-2xl w-full '>
          <DashCar
            recommend={'74%'}
            url={img11}
            name={'Porsche 911 Carrera'}
            price={'130K'}
            rate={'$28/h'}
          />
        </div>
        <div className=' rounded-2xl bg-pink-200 w-full '>
          <DashCar
            recommend={'74%'}
            url={img12}
            name={'Porsche 911 Carrera'}
            price={'132K'}
            rate={'$28/h'}
          />
        </div>
      </div>
    </div>
  )
}


