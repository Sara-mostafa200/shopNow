import React from "react";

export default function TopNav() {
  return (
   
<>

 <div className=" bg-black p-2 relative">


    <div className=" text-white  font-poppins flex flex-col justify-center items-center gap-2   ">
      <span className="text-[14px] ">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <span className="font-[600] ml-2 underline cursor-pointer ">ShopNow</span>
      </span>

      <div className="dropdown  z-10  md:absolute md:right-[20px]  lg:right-[10%] md:top-1/2 md:transform md:-translate-y-1/2">
        <button
          className="btn btn-secondary text-[14px] font-poppins p-1 bg-black border-none  "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          English <i className="fa-solid fa-angle-down ml-1"></i>
        </button> 
        <ul className="dropdown-menu p-1">
          <li >
            <span className="dropdown-item text-[14px] font-poppins " >
            Arabic
            </span>
          </li>
        </ul>
      </div>
    </div>  
 </div>

 </>
  );
}
