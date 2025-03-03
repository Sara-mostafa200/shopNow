import React, { useContext } from 'react'
import HomeSlider from '../HomeSlider/HomeSlider'
import SideBar from '../SideBar/SideBar'
import { ProductContext } from '../../Context/productContext'

export default function Hero() {
  
  return (
    <div className='flex justify-between relative items-center z-30'>
         <div className='absolute md:relative  top-1 left-1  z-10 '>
         <SideBar/>
   
         </div>
          <div className=' w-full md:w-3/4 md:px-2 lg:px-0 '>
          <HomeSlider/>
         </div> 
         
       </div>
  )
}
