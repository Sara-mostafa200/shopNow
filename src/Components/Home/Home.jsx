import React, { useContext } from 'react'
import Hero from '../Hero/Hero';
import FlashSales from '../FlashSales/FlashSales';
import Categories from '../Categories/Categories';
import BestSelling from '../BestSelling/BestSelling';
import Banner from '../Banner/Banner';
import OurProducts from '../OurProducts/OurProducts';
import Featured from '../Featured/Featured';
import Service from '../Service/Service';

export default function Home() {

 function toTop(){
  window.scrollTo({top:0 , behavior:"smooth"})
}
 
  return (
    <>
    <Hero/>
    <FlashSales/>
    <hr className='mx-2 text-[2px]'></hr>
    <Categories/>
    <hr className='mx-2 text-[2px]'></hr>
    <BestSelling/>
    <Banner/>
    <OurProducts/>
    <Featured/>
    <Service/>
    <div onClick={()=>toTop()} className='cursor-pointer size-8 bg-lineColor rounded-full flex items-center justify-center fixed bottom-3 right-2'>
    <i className="fa-solid fa-arrow-up"></i>

    </div>

    </>
   
  )
}
