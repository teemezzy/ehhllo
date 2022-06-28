import React from "react";
import { Link } from "react-router-dom";
import { link1, link2, link3, link4 } from "./data";

const Footer = () => {
  return (
    <>
    <div className=' bg-[#353535] text-white font-[Raleway] pt-28 pb-14 px-28 flex flex-col justify-center m-auto w-[75%] rounded-xl'>
        <div className="flex justify-around">
      <div>
        {link1.map((link) => (
          <div className="pb-8" key={link.id}>
            <h3 className="font-bold">{link.title}</h3>
            <Link to={link.path}>{link.link}</Link>
          </div>
        ))}
      </div>
      <div>
        {link2.map((link) => (
          <div className="pb-8" key={link.id}>
            <h3 className="font-bold">{link.title}</h3>
            <Link to={link.path}>{link.link}</Link>
          </div>
        ))}
      </div>
      <div>
        {link3.map((link) => (
          <div className="pb-8" key={link.id}>
            <h3 className="font-semibold">{link.title}</h3>
            <Link to={link.path}>{link.link}</Link>
          </div>
        ))}
      </div>
      <div>
        {link4.map((link) => (
          <div className="pb-8" key={link.id}>
            <h3 className="font-semibold">{link.title}</h3>
            <Link to={link.path}>{link.link}</Link>
          </div>
        ))}
      </div>
    </div>
    
    </div>
    <p className='font-[Raleway] my-[12.22px] flex justify-center m-auto'>2022 © ehhllo Technologies </p>
    </>
    
  );
};

export default Footer;
