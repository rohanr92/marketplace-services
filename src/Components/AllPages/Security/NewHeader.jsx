import React, { use } from 'react';

import { Link, NavLink, useNavigate } from 'react-router';
import Logo from "../../../assets/logo.svg"
import "./NewHeader.css"
import Container from '../../Container/Container';
import { AuthContext } from '../../Provider/AuthContext';
import { RxAvatar } from "react-icons/rx";

const NewHeader = () => {

   const { user, setUser, logOut } = use(AuthContext);
   let navigate = useNavigate();

   const handleLogOut = () => {

    logOut()
    .then(() => {
      setUser(null);
      navigate('/')
    }) 
    .catch((error) => {
      alert(error.message);
    })
   }

   

    const navMenu = (
  <>
  <div className='space-x-6 text-[15px] font-medium text-black'>
<NavLink to='/' >Home</NavLink>
<NavLink  to='/all-services' >All Services</NavLink>
<NavLink  to='/about' >About</NavLink>
<NavLink  to='/profile' >Profile</NavLink>
{/* <NavLink  to='/profile' >{user.name}</NavLink> */}
</div>
  </>
);


    return (
        <div className='w-full mx-auto z-50 sm:p-0 pb-[15px] bg-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.6px] border border-white/30 '>

            <Container>
            

<div className="navbar sm:h-[88px] px-[13px]">

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
<div className="navbar-end text-black flex items-center gap-3">


  {user ? (
    user.photoURL ? (
      <img
        src={user.photoURL}
        alt="Profile"
        className="w-12 h-12 rounded-full border-2 border-yellow-500 object-cover"
      />
    ) : (
      <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-yellow-500 bg-gray-200">
        <RxAvatar className="text-gray-400 w-6 h-6" />
      </div>
    )
  ) : null}

  
  {user ? (
    <button
      onClick={handleLogOut}
      className="border cursor-pointer border-yellow-500 rounded-lg sm:px-4 py-2 hover:bg-yellow-500 hover:text-black text-[15px]"
    >
      Sign Out
    </button>
  ) : (
    <>
      <Link
        to="/auth/login"
        className="px-3 py-2 text-[15px] cursor-pointer"
      >
        Sign In
      </Link>
      <Link
        to="/auth/register"
        className="border cursor-pointer border-yellow-500 rounded-lg sm:px-4 py-2 hover:bg-yellow-500 hover:text-black text-[15px]"
      >
        Register
      </Link>
    </>
  )}
</div>

  
</div>

</Container>
            
            

            </div>
    );
};

export default NewHeader;