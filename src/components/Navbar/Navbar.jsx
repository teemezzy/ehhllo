import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Logo, express } from "../../assets";
import MidNav from "./MidNav";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 bg-white lg:mx-[10rem]">
        <nav className="hidden xl:block navbar divide-solid > * divide-gray-500 > * border-b-2 pb-5 px-7
">
          <div className="flex justify-between pt-10 ">
                <div className="flex items-center ">
                    <NavLink to="/">
                        <img
                        src={Logo}
                        alt="ehhllo_logo"
                        className="w-[183px]"
                        />
                    </NavLink>
                </div>
                <div className="flex justify-between items-center font-[Raleway] text-[#284B63] font-bold">
                    <div className="mr-12">
                        <NavLink to="/">messenger</NavLink>
                    </div>
                    <div className="">
                        <NavLink to="/express.ehhllo">
                        <img src={express} alt="" className='w-[78px]' />
                        </NavLink>
                    </div>

                  <div className="ml-12">
                      <NavLink to="/">Contact</NavLink>
                  </div>
                </div>
          </div>
        </nav>
      </div>
      <MidNav />
    </>
  );
};

export default Navbar;
