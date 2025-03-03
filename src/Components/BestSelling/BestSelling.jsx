import React, { useContext } from 'react'
import { ProductContext } from "../../Context/productContext";
import ProductCard from '../ProductCard/ProductCard';

export default function BestSelling() {
        let { BestSelling } = useContext(ProductContext);
    
  return (
    <div className="flex flex-col gap-x-3 my-5 p-2">
    <div className="flex items-center gap-3  ">
      <div className="w-[20px] h-[40px] bg-mainColor rounded "></div>
      <span className="font-poppins  font-semibold  text-[16px] text-mainColor">
      This Month
      </span>
    </div>
    <div className="flex items-start md:items-center justify-between w-full flex-col md:flex-row gap-y-5 gap-x-20">
      <h2 className="font-semibold text-[36px] leading-[48px]">
      Best Selling Products
      </h2>
      <button className="btn bg-mainColor text-white rounded w-[159px] h-[56px] font-poppins font-medium leading-6">View All</button>

    </div>
  
     <div className="row sm:mx-auto mx-0">
         {BestSelling.map((item) => (
            <div className='w-full md:w-1/3 lg:w-1/4' key={item.id}>

                <ProductCard item ={item} />
            </div>
     
      ))}
     </div>
      
   

     
  
  </div>
  )
}
