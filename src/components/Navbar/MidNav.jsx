import React from "react";
import { navList } from "./navList";
import { NavLink } from "react-router-dom";
import { expressMobile } from "../../assets";


const MidNav = () => {

  return (
    <div className="set-position">
      <div className=" xl:hidden pt-10 flex justify-between items-center px-5 bg-white pb-4 lg:w-full w-[30%] ">
            
            {navList.map((nav) => (
            <div key={nav.id}>
                <NavLink className="" to={nav.path}>
                {nav.link}
                </NavLink>
            </div>
            ))}
            
            <div className="">
                    {/* <div className="text-[10px]">
                        <NavLink to="/">messenger</NavLink>
                    </div> */}
                    <div className="">
                        <NavLink to="/express.ehhllo">
                        <img src={expressMobile} alt="" className='w-full' />
                        </NavLink>
                    </div>

                  {/* <div className="text-[10px]">
                      <NavLink to="/">Contact</NavLink>
                  </div> */}
                </div>
      </div>

    </div>
  );
};

export default MidNav;
