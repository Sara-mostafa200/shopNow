import React from 'react'
import { Button, Form } from 'react-bootstrap'
import searchIcon from '../../assets/searchIcon.svg'
import wishlistIcon from '../../assets/wishList.svg'
import CartIcon from '../../assets/Cart1.svg'
import { Link } from 'react-router-dom'

export default function NavSearch() {
  return (
    <Form className="d-flex gap-3 items-center  justify-center">
                 <div className='relative w-full'>
                <Form.Control
                  type="text"
                  placeholder="What are you looking for?"
                  className="me-2 placeholder:text-[12px] bg-[#F5F5F5] focus:border-none focus:shadow-none  "
                  aria-label="Search"
                  
                />
                <img src={searchIcon} className='cursor-pointer size-[16px] absolute right-2 top-1/2 transform -translate-y-1/2' alt="" />
                </div>
                <Link to="/wishlist">
                <img src={wishlistIcon} className='cursor-pointer size-[25px] ' alt="" />
                </Link>
                <Link to="/cart">
                <img src={CartIcon} className='cursor-pointer size-[25px] ' alt="" />
                </Link>


              </Form>
      
    
  )
}
