import React, { useState } from "react";
import { navList } from "./navList";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import DrawerNav from "./DrawerNav";

const MidNav = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="set-position">
      <div className=" xl:hidden pt-5 flex justify-between items-center px-5 bg-white pb-3 border-2">
            
            {navList.map((nav) => (
            <div key={nav.id} className="w-[48.03px]">
                <NavLink  to={nav.path}>
                {nav.link}
                </NavLink>
            </div>
            ))}
            <div>{toggle ? <GrClose onClick={handleClick} /> : <GiHamburgerMenu onClick={handleClick}/>}</div>
            
      </div>


      <div>
        {toggle && (
          <div className="flex flex-col justify-end">
            <DrawerNav />
          </div>
        )}
      </div>
    </div>
  );
};

export default MidNav;
