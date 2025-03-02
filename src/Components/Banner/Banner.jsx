import React from "react";
import BOOMBOX from "../../assets/BOOMBOX.png";

export default function Banner() {
  return (
    <div className="bg-black w-full p-4 flex flex-col md:flex-row  md:items-center gap-5">
      <div className=" w-full md:w-1/2 my-5 md:my-0 md:order-2 ">
        <img
          className="w-full  md:w-3/4  mx-auto shadowBOOMBOX "
          src={BOOMBOX}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4 w-1/2 items-start font-poppins">
        <span className="font-semibold text-btnGreen">Categories</span>
        <h3 className="font-inter font-semibold text-[48px] text-start text-white">Enhance Your Music Experience</h3>
        <div className="flex gap-3">
          <div className="rounded-full  size-[62px] bg-Secondary flex flex-col items-center justify-center ">
            <span className="font-semibold">23</span>
            <span className="text-[11px]">Hours</span>
          </div>
          <div className="rounded-full  size-[62px] bg-Secondary flex flex-col items-center justify-center ">
            <span className="font-semibold">05</span>
            <span className="text-[11px]">Days</span>
          </div>
          <div className="rounded-full  size-[62px] bg-Secondary flex flex-col items-center justify-center ">
            <span className="font-semibold">59</span>
            <span className="text-[11px]">Minutes</span>
          </div>
          <div className="rounded-full  size-[62px] bg-Secondary flex flex-col items-center justify-center ">
            <span className="font-semibold">35</span>
            <span className="text-[11px]">Seconds</span>
          </div>
        </div>
        <button className="bg-btnGreen px-3 py-3 font-medium text-white rounded"> Buy Now! </button>
      </div>
    </div>
  );
}
