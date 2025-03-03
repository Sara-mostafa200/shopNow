import React from 'react'
import google from "../../assets/Icon-Google.svg"
import login from "../../assets/login.png"
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex p-4 flex-col md:flex-row items-center justify-around">
      <div className="img w-full md:w-1/2 lg:w-3/4 p-5">
      <img className=" w-full md:w-3/4 " src={login} alt="" />
      </div>
      <div className="myForm py-12  font-poppins w-full md:w-1/2 lg:w-1/4 flex flex-col gap-5 items-start  ">
        <span className="font-inter font-medium text-[36px]">
        Log in to Exclusive
        </span>
        <span>Enter your details below</span>
        <div className="w-full flex flex-col gap-5 ">
       
          <div className="relative z-0 "> 
            <input
              type="email"
              id="Email"
              className="block px-0 w-full  text-sm text-gray-900 bg-transparent  border-b border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="Email"
              className="absolute   text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-[-5px] -z-10 left-0 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:left-0 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
             Email or Phone Number
            </label>
          </div>
          <div className="relative z-0 ">
            <input
              type="password"
              id="password"
              className="block px-0 w-full  text-sm text-gray-900 bg-transparent  border-b border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute   text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-[-5px] -z-10 left-0 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:left-0 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
             password
            </label>
          </div>
          <div className='flex flex-col gap-3 md:flex-row'>

          <button className=" rounded-sm px-4 py-2 border border-mainColor bg-mainColor text-white hover:bg-transparent btn  transition-all duration-300">
          Log In
          </button>
          <button className=" rounded-sm px-4 py-2   text-mainColor bg-transparent   transition-all duration-300">
          Forget Password?
          </button>
          </div>
       


       
        </div>
      </div>
    </div>
  );
}
