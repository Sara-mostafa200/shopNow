import React, { useState } from 'react'
import appleLogo from '../../assets/1200px-Apple_gray_logo 1.svg'
import arrow from '../../assets/icons arrow-right.svg'
import iphone from '../../assets/hero_endframe.jpg'
import Slider from "react-slick";

export default function HomeSlider() {
    const [loop, setloop] = useState([1,2,3,4,5])
    var settings = {
        dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay:true,
    autoplaySpeed:4000,
    focusOnSelect:true,
    arrows:false,
    appendDots: dots => (
        <div
          className='relative w-full '
        >
        
          <ul className='absolute top-[-50px] left-[50%] transform  -translate-x-1/2 ' style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
  
    customPaging: dot => (
        <div
         className='bg-[#808080] size-3 rounded '
        >
          
        </div>
      )
      };

  return (
    <Slider {...settings} className=' flex items-center justify-center '>
    {loop.map((item)=><div className='w-full flex flex-col md:flex-row  bg-black py-5 px-2 items-center'>
        <div className='w-full md:w-1/2 md:order-2 '> 
        <img src={iphone} className=' w-full' alt="" />

        </div>
        <div className='w-full md:w-1/2 text-white px-5 flex flex-col items-start gap-4  md:order-1'>
        <div className='flex items-center gap-4'>
            <img className='w-[40px] h-[49px]' src={appleLogo} alt="" />
            <span className='font-poppins text-[16px]'>iPhone 14 Series</span>
        </div>
        <span className='leading-[60px] text-start font-semibold text-[48px] max-w-[280px] tracking-[4%]'>
        Up to 10% off Voucher

        </span>

        <div className='flex gap-2 items-center cursor-pointer'>
         <span className='border-b-[1px] font-poppins text-[16px] font-medium leading-6'>Shop Now </span> 
         <img src={arrow} alt='' className="size-5"/>
        </div>

        </div>
        
      
    </div>)}
    
    
   

    
   
    </Slider>
  )
}
