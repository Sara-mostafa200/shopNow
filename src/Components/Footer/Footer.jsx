import React from 'react'
import send from "../../assets/icon-send.svg"
import QrCode from "../../assets/QrCode.png"
import GooglePlay from "../../assets/GooglePlay.png"
import AppStore from "../../assets/AppStore.png"
import Facebook from "../../assets/Icon-Facebook.svg"
import instagram from "../../assets/icon-instagram.svg"
import Linkedin from "../../assets/Icon-Linkedin.svg"
import Twitter from "../../assets/Icon-Twitter.svg"

export default function Footer() {
  return (
    <div className='bg-black '>

    
    <div className=' flex flex-row  p-4 flex-wrap  gap-y-5 text-white '>
      <div className='px-4 flex flex-col gap-3 w-full  md:w-6/12 lg:w-3/12 items-start'>
        <span className='font-bold text-[24px]'>Exclusive</span>
        <span className='font-poppins font-medium text-[20px]'>Subscribe</span>
        <span className='font-poppins text-[16px]'>Get 10% off your first order</span>
        <div className=' relative'>

        <input className='bg-black border-white border py-2 px-2 placeholder:text-textGray' type='email' placeholder='Enter your email'></input>
        <img className='absolute right-1 top-[10px]' src={send} alt=''/>
        </div>
      </div>
      <div className='px-4 flex flex-col gap-3 font-poppins text-start w-1/2 md:w-3/12 lg:w-2/12'>
        <span className=' font-medium text-[20px]'>Support</span>
        <span className=''>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</span>
        <span>exclusive@gmail.com</span>
        <span>+88015-88888-9999</span>
       
      </div>
      <div className='px-4 font-poppins text-start flex flex-col gap-3 w-1/2  md:w-3/12 lg:w-2/12'>
        <span className='font-medium text-[20px]'>Account</span>
        <span>My Account</span>
        <span>Login / Register</span>
        <span>Cart</span>
        <span>Wishlist</span>
        <span>Shop</span>
       
      </div>
      <div className='px-4 font-poppins text-start flex flex-col gap-3 w-1/2  md:w-3/12 lg:w-2/12'>
        <span className='font-medium text-[20px]'>Quick Link</span>
        <span>Privacy Policy</span>
        <span>Terms Of Use</span>
        <span>FAQ</span>
        <span>Contact</span>
      
       
      </div>
      <div className='px-4 font-poppins text-start flex flex-col gap-3 w-1/2  md:w-6/12 lg:w-3/12'>
        <span className='font-medium text-[20px]'>Download App</span>
        <span className='font-medium text-[12px] text-textGray'>Save $3 with App New User Only</span>
        <div className='flex items-center gap-2'>
          <div>
            <img src={QrCode} alt="" />

          </div>
          <div className='flex flex-col gap-1'>
            <div>
            <img src={GooglePlay} alt="" />

            </div>
            <div>
            <img src={AppStore} alt="" />
            </div>
          </div>
        </div>
        <ul className='flex items-center gap-4 m-0 p-0'>
          <li><img src={Facebook} alt="" /></li>
          <li><img src={Twitter} alt="" /></li>
          <li><img src={instagram} alt="" /></li>
          <li><img src={Linkedin} alt="" /></li>
        </ul>
      
       
      </div>

    </div>
    <div className='p-3 border-t border-textGray   font-poppins text-textGray'>
      <span>© Copyright Rimel 2022. All right reserved</span>
    </div>
    </div>
  )
}
