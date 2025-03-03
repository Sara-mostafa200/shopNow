import React, { useState } from "react";
import FiveStar from "../../assets/products/Five star.svg";
import HalfStar from "../../assets/products/Four Half Star.svg";
import FillHeart from "../../assets/Fill Heart.svg";
import FillEye from "../../assets/Fill Eye.svg";
import remove from "../../assets/remove.svg";

export default function ProductCard({ item , green , showBtn , showRemove , showEye}) {
  const [changeColor, setchangeColor] = useState(green ? true : false)
  const [showColor, setshowColor] = useState(showBtn ? true : false)
  const [removeIcon, setremoveIcon] = useState(showRemove ? true : false)
  const [eyeIcon, seteyeIcon] = useState(showEye ? true : false)

  
  return (
    <>
      <div className="p-3">
        <div className="flex flex-col gap-2 text-start font-poppins font-medium text-[16px] leading-6">
          <div className="bg-Secondary rounded   relative group">
            <div className="py-4">
              <span className={`${changeColor ? `bg-btnGreen` : `bg-mainColor `} absolute left-3 top-3 font-poppins text-[12px] text-white px-3 py-1 rounded-sm`}>
                -{item?.discount}%
              </span>
              <img
                className="w-full py-4 h-[150px] object-contain"
                src={item?.image}
                alt=""
              />
              {removeIcon ? <div className="absolute right-3 top-3 flex flex-col gap-1  ">
                <img
                  className=" size-8 cursor-pointer"
                  src={remove}
                  alt=""
                />
                
              </div> : eyeIcon ?
              <div className="absolute right-3 top-3 flex flex-col gap-1  ">
              
                <img className="size-8 cursor-pointer" src={FillEye} alt="" />
              </div> : <div className="absolute right-3 top-3 flex flex-col gap-1  ">
                <img
                  className=" size-8 cursor-pointer"
                  src={FillHeart}
                  alt=""
                />
                <img className="size-8 cursor-pointer" src={FillEye} alt="" />
              </div>}
              
             

            </div>

            <div className="opacity-0 group-hover:opacity-100  transition-all duration-[0.5s]  w-full bg-black text-white p-2 text-center cursor-pointer">
              Add To Cart
            </div>
          </div>
          <span className="">{item?.name}</span>
          <div className="flex gap-2">
            <span className="text-mainColor">{item?.price}$</span>
            <span className="text-textGray line-through">
              {item?.oldPrice}$
            </span>
          </div>
          <div className="flex gap-2 items-center">
            {item?.rating >= 5 ? (
              <img className="" src={FiveStar} alt="" />
            ) : (
              <img src={HalfStar} alt="" />
            )}
            <span className="font-semibold text-[14px] text-textGray">
              ({item?.reviews})
            </span>
          </div>
          {
            showColor ? <div className="flex gap-2 items-center">
            <div className="cursor-pointer size-5 border-[1px] border-black bg-red-500 rounded-full"></div>
            <div className="cursor-pointer size-5 border-[1px]  bg-yellow-400 rounded-full"></div>
            </div> :null
          }
         
        </div>
      </div>
    </>
  );
}
