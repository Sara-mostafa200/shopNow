import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DropArrow from '../../assets/DropDown.svg'
export default function SideBar() {
    return <>
    {["md"].map((expand) => (
      <Navbar key={expand} expand={expand} className="  ">
        <div  >
         
          <Navbar.Toggle id='SideBar' aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
            className=" w-3/4 md:w-full p-3 "
          >
            <Nav className='flex flex-col gap-4 text-start font-poppins text-[16px] leading-6 lg:border-r border-lineColor'>
                <div className='flex items-center gap-3 justify-between cursor-pointer'>Woman’s Fashion <img src={DropArrow} alt="" /></div>
                <div className='flex items-center gap-3 justify-between cursor-pointer'>Woman’s Fashion <img src={DropArrow} alt="" /></div>
                
                <span className='cursor-pointer'>Electronics</span>
                <span className='cursor-pointer'>Home & Lifestyle</span>
                <span className='cursor-pointer'>Medicine</span>
                <span className='cursor-pointer'>Sports & Outdoor</span>
                <span className='cursor-pointer'>Baby’s & Toys</span>
                <span className='cursor-pointer'>Groceries & Pets</span>
                <span className='cursor-pointer'>Health & Beauty</span>

              </Nav>
        
            
          </Navbar.Offcanvas>
        </div>
      </Navbar>
    ))}
  </>

}
