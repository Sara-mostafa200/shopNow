import React from 'react'

export default function Timer() {
  return (
    <>
     <div className="flex items-center gap-2">
          <div className="flex flex-col gap-2 items-start">
            <span className="font-poppins text-[12px] font-medium leading-4 ">
              Days
            </span>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[32px] leading-7">03</span>
              <span className="text-mainColor  font-bold text-[25px]">:</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <span className="font-poppins text-[12px] font-medium leading-4 ">
            Hours
            </span>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[32px] leading-7">23</span>
              <span className="text-mainColor  font-bold text-[25px]">:</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <span className="font-poppins text-[12px] font-medium leading-4 ">
            Minutes
            </span>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[32px] leading-7">19</span>
              <span className="text-mainColor  font-bold text-[25px]">:</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <span className="font-poppins text-[12px] font-medium leading-4 ">
            Seconds
            </span>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[32px] leading-7">56</span>
              <span className="text-white font-bold text-[25px]">:</span>

            </div>
          </div>

     
        </div>
      
    </>
  )
}
