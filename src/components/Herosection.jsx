import React from "react";
import { Hero } from "../assets";

const Herosection = () => {
  return (
    <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mt-52 mt-32 lg:w-1/2 m-auto justify-center lg:mb-72 mb-10">
      <div className="w-[20rem] lg:placeholder m-auto">
        <h1 className="lg:text-[68px] text-[45.22px] font-semibold">ehhllo</h1>
        <h3 className="italic text-3xl mb-[10px]">/hello/</h3>
        <p className="font-[Raleway] text-[13.19px]">
          An utterance of <span className="font-bold ">‘hello’</span>; a greeting. puns on the popular colloquial
          greeting hello.
          <p className='mt-5'>
            We are all about bringing everyone and everything closer to you.
          </p>
        </p>
        <button type='button' className="bg-red-600 text-white border-2 rounded-lg font-[Raleway] lg:mt-[45px] font-bold py-3 px-16">Read more</button>
      </div>
      <div className="lg:mt-0 mt-10  m-auto">
        <img src={Hero} alt="hero-img" className=" w-[20rem] h-[27rem]" />
      </div>
    </div>
  );
};

export default Herosection;
