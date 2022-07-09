import React from "react";
import { navList } from "./navList";
import { NavLink } from "react-router-dom";
import { expressMobile } from "../../assets";

const MidNav = () => {
  return (
    <div className="set-position">
      <div className="xl:hidden pt-5 flex justify-around items-center m-auto bg-white pb-4 w-[390.27px] border-b-2">
        {navList.map((nav) => (
          <div key={nav.id} className="w-[65.64px]">
            <NavLink className="" to={nav.path}>
              {nav.link}
            </NavLink>
          </div>
        ))}

        <div className="font-[Raleway] flex justify-between items-center gap-5">
          <div className="text-[9.42px] text-[#284B63] font-bold">
            <NavLink to="/">messenger</NavLink>
          </div>
          <div className=" text-[9.42px] text-[#284B63] font-bold">
            <NavLink to="/express.ehhllo">
              e<span className="text-red-600">X</span>press
            </NavLink>
          </div>

          <div className="text-[9.42px] text-[#284B63] font-bold">
            <NavLink to="/">Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidNav;
