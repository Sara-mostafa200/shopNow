import React from "react";
import delivery from "../../assets/icon-delivery.svg";
import CustomerService from "../../assets/Icon-CustomerService.svg";
import secure from "../../assets/Icon-secure.svg";

export default function Service() {
  return (
    <div className="my-3 px-6 py-14 flex flex-col md:flex-row items-center justify-around gap-4">
      <div className=" flex flex-col items-center">
        <div className=" bg-black rounded-full border-[10px] size-[75px] flex items-center justify-center">
          <img src={delivery} alt="" />
        </div>
        <span className="font-poppins font-semibold text-[20px] leading-7">FREE AND FAST DELIVERY</span>
        <span className="font-poppins  text-[14px] leading-7" >Free delivery for all orders over $140</span>
      </div>
      <div className=" flex flex-col items-center">
        <div className=" bg-black rounded-full border-[10px] size-[75px] flex items-center justify-center">
          <img src={CustomerService} alt="" />
        </div>
        <span className="font-poppins font-semibold text-[20px] leading-7">24/7 CUSTOMER SERVICE</span>
        <span className="font-poppins  text-[14px] leading-7" >Friendly 24/7 customer support</span>
      </div>
      <div className=" flex flex-col items-center">
        <div className=" bg-black rounded-full border-[10px] size-[75px] flex items-center justify-center">
          <img src={secure} alt="" />
        </div>
        <span className="font-poppins font-semibold text-[20px] leading-7">MONEY BACK GUARANTEE</span>
        <span className="font-poppins  text-[14px] leading-7" >We reurn money within 30 days</span>
      </div>
    </div>
  );
}
