import React from "react";
import product3 from "../../assets/products/product3.png";
import product1 from "../../assets/products/g92-2-500x500 1.png";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="p-4 flex flex-col gap-5 items-start">
      <span className="text-start block text-textGray font-poppins text-[14px]">
        Home / <span className="text-black">Cart</span>
      </span>
      <div className="relative w-full  overflow-x-auto">
        <table className="border-separate border-spacing-y-4 w-full font-poppins leading-6 text-left rtl:text-right ">
          <thead className="  shadow-sm    ">
            <tr className="h-[72px] hover:bg-gray-50 ">
              <th scope="col" className="px-16 py-3">
                <span className="">Product</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="  shadow-sm border-b border-gray-200 hover:bg-gray-50 ">
              <td className="p-4 flex  gap-1 items-center">
                <img
                  src={product3}
                  className="w-16 md:w-32 max-w-full h-[50px] object-contain"
                  alt="LCD Monitor"
                />
                <span className="text-black"> LCD Monitor </span>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 ">$650</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div>
                    <input
                      type="number"
                      id="first_product"
                      className="placeholder:text-black w-14 border border-textGray text-gray-900 text-sm rounded focus-visible:outline-none focus:ring-blue-500  block px-1 py-2"
                      placeholder="01"
                      required
                    />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 ">$650</td>
            </tr>
            <tr className="  shadow-sm border-b border-gray-200 hover:bg-gray-50 ">
              <td className="p-4 flex  items-center gap-1">
                <img
                  src={product1}
                  className="w-16 md:w-32 max-w-full h-[50px] object-contain"
                  alt="LCD Monitor"
                />
                <span className="text-black"> H1 Gamepad </span>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 ">$650</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div>
                    <input
                      type="number"
                      id="first_product"
                      className="placeholder:text-black w-14 border border-textGray text-gray-900 text-sm rounded focus-visible:outline-none focus:ring-blue-500  block px-1 py-2"
                      placeholder="01"
                      required
                    />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 ">$1100</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between w-full md:items-center font-poppins font-medium">
        <button className="rounded-sm px-4 py-2 border border-black hover:bg-black hover:text-white transition-all duration-300">
          Return To Shop
        </button>
        <button className="rounded-sm px-4 py-2 border border-black hover:bg-black hover:text-white transition-all duration-300">
          Update Cart
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-3 items-start justify-between w-full">
        <div className="flex flex-col md:flex-row w-full md:items-center gap-2">
          <input
            className=" rounded-sm px-4 py-2 border border-black"
            placeholder="Coupon Code"
            type="text"
          />
          <button className="rounded-sm px-4 py-2 border border-mainColor bg-mainColor text-white hover:bg-transparent btn  transition-all duration-300">
            Apply Coupon
          </button>
        </div>
        <div className="w-full max-w-md p-4 font-poppins text-start bg-white border border-black rounded shadow-sm sm:p-8 ">
          <h5 className="text-[20px] font-medium leading-none text-gray-900">
            Cart Total
          </h5>

          <div className=" flex flex-col ">
            <ul
              role="list"
              className="flex flex-col gap-3 "
            >
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
              <li className="py-1 sm:py-2">

  
            <Link to="/Checkout" className="w-full  rounded-sm px-4 py-2 border border-mainColor bg-mainColor text-white hover:bg-transparent btn  transition-all duration-300">
            Procees to checkout
            </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
