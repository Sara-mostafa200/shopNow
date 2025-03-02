import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black p-4 flex gap-2 text-white'>
      <div className='flex flex-col gap-3 w-3/12'>
        <span>Exclusive</span>
        <span>Subscribe</span>
        <span>Get 10% off your first order</span>
        <input type='email' placeholder='Enter your email'></input>
      </div>
      <div className='flex flex-col gap-3 w-2/12'>
        <span>Support</span>
        <span>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</span>
        <span>exclusive@gmail.com</span>
        <span>+88015-88888-9999</span>
       
      </div>
      <div className='flex flex-col gap-3 w-2/12'>
        <span>Account</span>
        <span>My Account</span>
        <span>Login / Register</span>
        <span>Cart</span>
        <span>Wishlist</span>
        <span>Shop</span>
       
      </div>
      <div className='flex flex-col gap-3 w-2/12'>
        <span>Quick Link</span>
        <span>Privacy Policy</span>
        <span>Terms Of Use</span>
        <span>FAQ</span>
        <span>Contact</span>
      
       
      </div>
      <div className='flex flex-col gap-3 w-2/12'>
        <span>Download App</span>
        <span>Save $3 with App New User Only</span>
        <div>
          <div>

          </div>
          <div>
            <div>

            </div>
            <div>
              
            </div>
          </div>
        </div>
      
       
      </div>
    </div>
  )
}
