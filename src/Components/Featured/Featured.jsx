import React from 'react'

export default function Featured() {
  return (
    <div className='p-2'>
       <div className="flex items-center gap-3  ">
              <div className="w-[20px] h-[40px] bg-mainColor rounded "></div>
              <span className="font-poppins  font-semibold  text-[16px] text-mainColor">
              Featured
              </span>
            </div>
              <h2 className="font-semibold text-start text-[36px] leading-[48px]">
              New Arrival
              </h2>
        <div className='flex flex-col md:flex-row items-center gap-2 text-white '>
            <div className='w-full md:w-1/2 bg-[url("./assets/ps5.png")]  bg-no-repeat h-[600px]  bg-cover flex flex-col items-start justify-end gap-2 p-4 '>
            <span className=' font-semibold text-[24px]'>PlayStation 5</span>
            <span className='font-poppins text-start text-[14px] max-w-[300px] '>
            Black and White version of the PS5 coming out on sale.
            </span>
            <span className='font-poppins  border-b'>Shop Now</span>
            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-y-1  '>
            <div className='w-full  bg-[url("./assets/woman.png")]  bg-no-repeat h-[300px]  bg-cover flex flex-col items-start justify-end gap-2 p-4 '>
            <span className=' font-semibold text-[24px]'>Women’s Collections</span>
            <span className='font-poppins text-start text-[14px] max-w-[300px] '>
            Featured woman collections that give you another vibe.
            </span>
            <span className='font-poppins  border-b'>Shop Now</span>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-y-1 gap-x-2'>
            <div className='w-full md:w-1/2  bg-[url("./assets/Speakers.png")]  bg-no-repeat h-[300px] bg-cover flex flex-col items-start justify-end gap-2 p-4  '>
            <span className=' font-semibold text-[24px]'>Speakers</span>
            <span className='font-poppins text-start text-[14px] max-w-[300px] '>
            Amazon wireless speakers
            </span>
            <span className='font-poppins  border-b'>Shop Now</span>
            </div>
            <div className='w-full md:w-1/2   bg-[url("./assets/Perfume.png")]  bg-no-repeat h-[300px] bg-cover flex flex-col items-start justify-end gap-2 p-4 '>
            <span className=' font-semibold text-[24px]'>Perfume</span>
            <span className='font-poppins text-start text-[14px] max-w-[300px] '>
            GUCCI INTENSE OUD EDP
            </span>
            <span className='font-poppins  border-b'>Shop Now</span>
            </div>
            </div>
            </div>
        </div>
              
            


    </div>
  )
}
