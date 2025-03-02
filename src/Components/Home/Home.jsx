import React, { useContext } from 'react'
import HomeSlider from '../HomeSlider/HomeSlider'
import SideBar from '../SideBar/SideBar'
import { ProductContext } from '../../context/productContext'
import Hero from '../Hero/Hero';
import FlashSales from '../FlashSales/FlashSales';
import Categories from '../Categories/Categories';
import BestSelling from '../BestSelling/BestSelling';
import Banner from '../Banner/Banner';
import OurProducts from '../OurProducts/OurProducts';
import Featured from '../Featured/Featured';
import Service from '../Service/Service';

export default function Home() {
 let{first} = useContext(ProductContext);
 
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

    </>
   
  )
}
