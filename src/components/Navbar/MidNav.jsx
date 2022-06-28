import React from "react";
import { navList } from "./navList";
import { NavLink } from "react-router-dom";
import { expressMobile } from "../../assets";


const MidNav = () => {

  return (
    <div className="set-position">
      <div className=" xl:hidden pt-10 flex justify-between items-center px-5 bg-white pb-4 w-full border-b-2 ">
            
            {navList.map((nav) => (
            <div key={nav.id} className='w-[25%]'>
                <NavLink className="" to={nav.path}>
                {nav.link}
                </NavLink>
            </div>
            ))}
            
            <div className="font-[Raleway] flex justify-between items-center gap-5">
                    <div className="text-[12px] text-[#284B63] font-bold">
                        <NavLink to="/">messenger</NavLink>
                    </div>
                    <div className="w-full">
                        <NavLink to="/express.ehhllo">
                        <img src={expressMobile} alt="" className='' />
                        </NavLink>
                    </div>

                  <div className="text-[12px] text-[#284B63] font-bold">
                      <NavLink to="/">Contact</NavLink>
                  </div>
                </div>
      </div>

    </div>
  );
};

export default MidNav;
