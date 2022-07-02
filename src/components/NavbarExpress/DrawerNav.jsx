import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const DrawerNav = () => {
  return (
    <div className='border-2'>
      <div className="flex flex-col justify-between items-center sm:w-80 w-72 h-72 absolute right-0 left-32 m-auto z-10 py-10 px-8 mr-5 bg-white ">
        <button className='sm-btn'>
          <NavLink to='/express.ehhllo'>Become a partner</NavLink>
        </button>
        <button className=' sm-btn'>
          <NavLink  to='/about'>About Us</NavLink>
        </button>
        <button className=' sm-btn'>
          <NavLink  to='/express.ehhllo'>log in</NavLink>
        </button>
        <button className='sm-btn'>
          <NavLink  to='/express.ehhllo'>Sign up</NavLink>
        </button>
      </div>
    </div>
  );
};

export default DrawerNav;
