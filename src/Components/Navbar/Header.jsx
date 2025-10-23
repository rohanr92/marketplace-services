import React from 'react';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router';
import Logo from "../../assets/logo.svg"
import "./Header.css"


const Header = () => {



    const navMenu = (
  <>
  <div className='space-x-6 text-[15px] font-medium text-white'>
<NavLink to='/' >Home</NavLink>
<NavLink  to='/all-services' >All Services</NavLink>
<NavLink  to='/about' >About</NavLink>
<NavLink  to='/profile' >Profile</NavLink>
</div>
  </>
);




    return (
      <>
       
      <div className='absolute w-full mx-auto z-50 mt-[20px] sm:p-0 px-[15px] top-0 left-0'>
            <Container>

<div className="navbar bg-white/10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.6px] border border-white/30 mt-[20px] sm:h-[88px] px-[13px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navMenu}
      </ul>
    </div>
    <Link to='/'><img src={Logo} alt="Logo" className='w-[33px]' /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navMenu}
    </ul>
  </div>
  <div className="navbar-end text-white">
    <button className="px-3 py-2 text-[15px] cursor-pointer">Sign In</button>
<button className="border cursor-pointer border-white rounded-lg sm:px-[35px] py-2 hover:bg-white hover:text-black text-[15px]">Register</button>
  </div>
</div>


            </Container>
            

            </div>
      
     
            </>
    );
};

export default Header;