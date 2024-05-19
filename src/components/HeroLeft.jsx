import React from 'react'
import bg from '../assets/bg.png'

const HeroLeft = () => {
  return (
    <div
      className="w-[98vw] md:w-[654px] md:h-[408px] py-6 md:py-0 mx-1 overflow-x-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        
      }}
    >
      <div className="flex flex-col justify-start">
        <div className="bg-[#EBE9FF] bg-opacity-80 rounded-xl md:w-[60%] w-[90%] mt-8 px-3 md:px-6 py-4 ">
          <h1 className="text-[#292355] text-xl font-semibold">BOOK YOUR SERVICE NOW</h1>
          <h2 className="text-[#646464] text-3xl font-bold">Fine art service</h2>
        </div>
        <div className="text-[#292355] font-bold flex-1 text-2xl md:text-4xl ml-4 mt-6 flex flex-col gap-2 md:gap-5">
          <h2>ON TIME DELIVERY</h2>
          <h2>ECONOMICAL PRICE</h2>
          <h2>ZERO DAMAGE POLICY</h2>
        </div>
      </div>
    </div>
  )
}

export default HeroLeft