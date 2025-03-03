import React from "react";
import product3 from "../../assets/products/product3.png";
import product1 from "../../assets/products/g92-2-500x500 1.png";
import visa from "../../assets/visa.png";

export default function Checkout() {
  return (
    <div className="p-4 flex flex-col items-start gap-3">
      <span className="text-start block text-textGray font-poppins text-[14px] cursor-pointer">
        Account / My Account / Product / View Cart /{" "}
        <span className="text-black">CheckOut</span>
      </span>
      <h2 className="font-medium leading-7 text-[36px]">Billing Details</h2>
      <div className="flex w-full flex-col md:flex-row items-start font-poppins">
        <div className="w-full md:w-1/2 py-6 px-3">
          <div className=" flex flex-col items-center font-poppins gap-3 ">
            <div className="w-full text-start">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-textGray "
              >
                First Name
                <span className="text-mainColor ml-1">*</span>
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-Secondary focus-visible:outline-none border border-gray-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5"
                required
              />
            </div>
            <div className="w-full text-start">
              <label
                htmlFor="Company"
                className="block mb-2 text-sm font-medium text-textGray "
              >
                Company Name
              </label>
              <input
                type="text"
                id="Company"
                className="bg-Secondary focus-visible:outline-none border border-gray-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5"
              />
            </div>
            <div className="w-full text-start">
              <label
                htmlFor="Address"
                className="block mb-2 text-sm font-medium text-textGray "
              >
                Street Address
                <span className="text-mainColor ml-1">*</span>
              </label>
              <input
                type="text"
                id="Address"
                className="bg-Secondary focus-visible:outline-none border border-gray-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5"
                required
              />
            </div>
            <div className="w-full text-start">
              <label
                htmlFor="floor"
                className="block mb-2 text-sm font-medium text-textGray "
              >
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                id="floor"
                className="bg-Secondary focus-visible:outline-none border border-gray-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5"
              />
            </div>
            <div className="w-full text-start">
              <label
                htmlFor="City"
                className="block mb-2 text-sm font-medium text-textGray "
              >
                Town/City
                <span className="text-mainColor ml-1">*</span>
              </label>
              <input
                type="text"
                id="City"
                className="bg-Secondary focus-visible:outline-none border border-gray-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5"
                required
              />
            </div>
            <div className="w-full text-start">
              <label
                htmlFor="Phone"
                className="block mb-2 text-sm font-medium text-textGray "
              >
                Phone Number
                <span className="text-mainColor ml-1">*</span>
              </label>
              <input
                type="tel"
                id="Phone"
                className="bg-Secondary focus-visible:outline-none border border-gray-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5"
                required
              />
            </div>
            <div className="w-full text-start">
              <label
                htmlFor="Email"
                className="block mb-2 text-sm font-medium text-textGray "
              >
                Email Address
                <span className="text-mainColor ml-1">*</span>
              </label>
              <input
                type="email"
                id="Email"
                className="bg-Secondary focus-visible:outline-none border border-gray-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5"
                required
              />
            </div>
            <div className="w-full flex items-center gap-2">
              <input type="checkbox" className="accent-mainColor size-6 " />
              <span className="text-[12px] md:text-[16px]">
                Save this information htmlForfaster check-out next time
              </span>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-full md:w-1/2 py-5 px-3 flex flex-col gap-3 ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 ">
              <img className="size-14 object-contain" src={product1} alt="" />
              <span>LCD Monitor</span>
            </div>
            <span>$650</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 ">
              <img className="size-14 object-contain" src={product3} alt="" />
              <span>H1 Gamepad</span>
            </div>
            <span>$1100</span>
          </div>
          <div className=" flex flex-col ">
            <ul role="list" className="flex flex-col gap-3 w-full m-0 p-0 ">
              <li className="border-b border-textGray py-1 sm:py-2">
                <div className="flex items-center">
                  <div className="flex items-center justify-between w-full">
                    <p className=" text-gray-900 truncate m-0">Subtotal:</p>
                  </div>
                  <div className="inline-flex items-center  text-gray-900 ">
                    $1750
                  </div>
                </div>
              </li>
              <li className="border-b border-textGray  py-1 sm:py-2">
                <div className="flex items-center">
                  <div className="flex items-center justify-between w-full">
                    <p className=" text-gray-900 truncate m-0">Shipping:</p>
                  </div>
                  <div className="inline-flex items-center  text-gray-900 ">
                    Free
                  </div>
                </div>
              </li>
              <li className=" py-1 sm:py-2">
                <div className="flex items-center">
                  <div className="flex items-center justify-between w-full">
                    <p className=" text-gray-900 truncate m-0">Total:</p>
                  </div>
                  <div className="inline-flex items-center  text-gray-900 ">
                    $1750
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center  justify-between ">
              <div className="flex items-center gap-2">

              <input name="pay" className="size-6 accent-black" type="radio" />
              <span>Bank</span>
              </div>
              <img src={visa} alt="" />
            </div>
            <div className="flex items-center gap-2">
            <input name="pay" className="size-6 accent-black" type="radio" />
            <span>Cash on delivery</span></div>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between md:items-center gap-2">
          <input
            className=" rounded-sm px-4 py-2 border border-black"
            placeholder="Coupon Code"
            type="text"
          />
          <button className="rounded-sm px-3 py-2 border border-mainColor bg-mainColor text-white hover:bg-transparent btn  transition-all duration-300">
            Apply Coupon
          </button>
        </div>
        <button className="w-1/2 rounded-sm px-4 py-2 border border-mainColor bg-mainColor text-white hover:bg-transparent btn  transition-all duration-300">
        Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
