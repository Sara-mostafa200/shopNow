import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import ProductCard from "../ProductCard/ProductCard";

export default function Wishlist() {
          let { BestSelling ,FlashSales } = useContext(ProductContext);
  
  return (
    <div className="p-4 font-poppins flex flex-col gap-5 ">
      <div className="TopProductts">
        <div className="title flex items-center justify-between">
          <span className="text-[20px]">Wishlist (4)</span>
          <button className="rounded-sm px-4 py-2 border border-black hover:bg-black hover:text-white transition-all duration-300">
            Move All To Bag
          </button>
        </div>
          <div className="row pt-4 sm:mx-auto mx-0">
                 {BestSelling.map((item) => (
                    <div className='w-full md:w-1/3 lg:w-1/4' key={item.id}>
        
                        <ProductCard item ={item} showRemove={true}/>
                    </div>
             
              ))}
             </div>

            

      </div>
      <div className="secondProducts">
         <div className="secondTitle flex items-center justify-between">
             <div className="flex items-center gap-3  ">
        <div className="w-[20px] h-[40px] bg-mainColor rounded "></div>
        <span className="font-poppins  text-[20px] ">
        Just For You
        </span>
      </div>
      <button className="rounded-sm px-4 py-2 border border-black hover:bg-black hover:text-white transition-all duration-300">
      See All
          </button>
             </div>
             <div className="row pt-4 sm:mx-auto mx-0">
                 {FlashSales.map((item) => (
                    <div className='w-full md:w-1/3 lg:w-1/4 ' key={item.id}>
        
                        <ProductCard item ={item} showEye={true} green={true}/>
                    </div>
             
              ))}
             </div>
      </div>
    </div>
  );
}
