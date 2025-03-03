import React from "react";
import google from "../../assets/Icon-Google.svg"
import login from "../../assets/login.png"
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="flex p-4 flex-col md:flex-row items-center justify-around">
      <div className="img w-full md:w-1/2 lg:w-3/4 p-5">
      <img className=" w-full md:w-3/4 " src={login} alt="" />
      </div>
      <div className="myForm py-12  font-poppins w-full md:w-1/2 lg:w-1/4 flex flex-col gap-5 items-start  ">
        <span className="font-inter font-medium text-[36px]">
          Create an account
        </span>
        <span>Enter your details below</span>
        <div className="w-full flex flex-col gap-5 ">
          <div className="relative z-0 ">
            <input
              type="text"
              id="Name"
              className="block px-0 w-full  text-sm text-gray-900 bg-transparent  border-b border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="Name"
              className="absolute   text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-[-5px] -z-10 left-0 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:left-0 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
             Name
            </label>
          </div>
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
          <button className=" rounded-sm px-4 py-2 border border-mainColor bg-mainColor text-white hover:bg-transparent btn  transition-all duration-300">
          Create Account
          </button>
          <button className="rounded-sm px-4 py-2 border border-textGray hover:bg-black hover:text-white transition-all duration-300 flex gap-3 justify-center items-center">
            <img src={google} alt="" />
            <span>

          Sign up with Google
            </span>
        </button>

        <div className=" flex items-center gap-2 text-textGray font-poppins">
          <span className=" ">Already have account?</span>
          <Link to='/login' className="text-textGray  font-medium border-b border-textGray">Log in</Link>
        </div>

       
        </div>
      </div>
    </div>
  );
}
