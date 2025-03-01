import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavSearch from "../NavSearch/NavSearch";
import { Link, NavLink } from 'react-router-dom';

function MainNav() {
    return (
        <Navbar expand="md" className="border-bottom border-lineColor bg-white  p-3">
          <Container fluid className="md:myContainer" >
            <Link to="/" className="font-bold text-black text-[24px]">Exclusive</Link>
            <Navbar.Toggle className="border-transparent focus:border-black focus:shadow-none" aria-controls="navbarScroll" />
            <Navbar.Collapse className="md:flex flex-col md:flex-row justify-around " id="navbarScroll">
               <div className="md:hidden my-3 w-full">
                <NavSearch/>
                </div> 
             
              <div
                className=" order-1 md:order-2 flex items-center flex-col md:flex-row  gap-y-4 md:gap-y-0  md:gap-x-6 lg:gap-x-12 "
                
              >
                <NavLink className="text-[16px] font-poppins text-black navHover" to="/">Home</NavLink>
                <span className="text-[16px] font-poppins text-black navHover" to="/contact">Contact</span>
                <span className="text-[16px] font-poppins text-black navHover" to="/about">About</span>
                <NavLink className="text-[16px] font-poppins text-black navHover" to="signUp">Sign Up</NavLink>
                
                
                
              </div>
              
            </Navbar.Collapse>
            <div className="hidden md:block">
                <NavSearch/>
                </div> 
          </Container>
        </Navbar>
      );
}

export default MainNav;