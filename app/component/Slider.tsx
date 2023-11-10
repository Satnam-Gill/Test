'use client'
import React from 'react'
import { SliderData } from './SliderData'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const Slider = () => {
  const [Current, setCurrent] = useState(0)
  const length = SliderData.length

  const nextSlide = () => {
    setCurrent(Current === length - 1 ? 0 : Current + 1)
  }
  
  const prevSlide = () => {
    setCurrent(Current === 0 ? length - 1 : Current - 1)
  }
   
  if(!Array.isArray(SliderData) || SliderData.length <= 0){
    return null
  }
     
  return (
    <div className="px-10">
      <div className="text-4xl text-center mt-20 font-semibold">Gallery</div>
    <div className='pt-10 px-10  border border-black py-10 relative ease-in-out duration-1000 text-white/70 ' >
      {SliderData.map((slide, index) => {
        return (
          <div className="">
             <FaArrowAltCircleLeft size={40} onClick={nextSlide} className="absolute top-[50%] left-[40px]  text-white/70 cursor-pointer select-none z-[2] "/>
          <div key={index} className={index ===Current ? '  ease-in  duration-1000' :  ' blur hiddden '}>
            {/* <div className="absolute h-[90%] border border-black z-20 w-9 cursor-pointer ease-in duration-1000"> </div>
            <div className="absolute h-[90%] border end-10 border-black  w-8 cursor-pointerease-in duration-1000 hover:bg-gray-600/70"> </div> */}
           
            {index === Current && (
              <Image src={slide.image} alt='' width='1440' height='600' objectFit='cover' />
            )}
             
            
          </div>
          <FaArrowAltCircleRight size={40}  onClick={prevSlide} className="absolute top-[50%] right-[40px] text-white/70  cursor-pointer select-none z-[3] "/>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Slider