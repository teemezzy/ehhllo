import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { LogoExpress } from "../../assets";
import MidNav from "./MidNav";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 bg-white m-auto z-10">
        <nav className="hidden xl:block divide-solid > * divide-gray-500 > * border-b-2 pb-5 lg:w-[1290px] m-auto lg:px-[45px]">
          <div className="flex justify-between pt-10">
            <div className="flex items-center">
              <NavLink to="/">
                <img
                  src={LogoExpress}
                  alt="ehhllo_logo"
                  className="w-[150px]"
                />
              </NavLink>
            </div>
            <div className="flex justify-between items-center font-[Raleway] font-bold text-[16px]">
              <div className="mr-[50px] text-[#284B63] ">
                <NavLink to="/about">About us</NavLink>
              </div>
              <div className="text-[#284B63] mr-[50px] ">
                <NavLink to="/express.ehhllo">Become a partner</NavLink>
              </div>

              <div className="mr-[50px]">
                <NavLink to="/express.ehhllo">log in</NavLink>
              </div>

              <button
                type="button"
                className="bg-red-600 text-white px-[62.5px] py-[10.5px] rounded-lg"
              >
                sign up
              </button>
            </div>
          </div>
        </nav>
      </div>
      <MidNav />
    </>
  );
};

export default Navbar;
