import React from 'react'
import { GoTriangleDown } from "react-icons/go";

const Form = () => {
  return (
    <div>
      <div className='ml-4 mt-6 md:mt-0 flex gap-2 font-bold cursor-pointer items-center'>
        <h1 className='text-[#292355] '>Delhi </h1>
        <GoTriangleDown/> 
      </div>
      
      <form action="" className='bg-[#F2F2F2] md:rounded-l-[30px] rounded-[15px] mx-1 md:mx-0 h-[70vh] md:h-[90vh] p-3 md:p-6 md:pl-10'> 
        <div className='flex gap-2  mt-6 justify-center md:justify-start'>
          <button className='bg-[#A6A3B6] px-4 py-1 rounded-full text-white font-semibold'>Domestic</button>
          <button className='bg-[#ECECEC] px-4 py-1 rounded-full text-[#808080] font-semibold'>International</button>
        </div>
        <div className='mt-6 flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="location" className='text-[#444444] font-semibold'>Pick up location</label>
            <input type="text" name='location' className='w-full p-2 border-[1px] rounded-[8.54px]' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="droplocation" className='text-[#444444] font-semibold'>Drop up location</label>
            <input type="text" name='droplocation' className='w-full p-2 border-[1px] rounded-[8.54px]' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="contact" className='text-[#444444] font-semibold'>Contact</label>
            <input type="number" name='contact' className='w-[50%] p-2 border-[1px] rounded-[8.54px]' />
          </div>
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="shipdata" className="text-[#444444] font-semibold">Shipping Date</label>
            <div className="relative w-[50%]">
              <input
                type="date"
                name="shipdata"
                className="w-full p-2 border-[1px] rounded-[8.54px] text-transparent focus:text-black"
              />
            </div>
          </div>
         
          
        </div>
      </form>
    </div>
  
  )
}

export default Form