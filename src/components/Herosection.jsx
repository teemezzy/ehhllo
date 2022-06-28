import React from "react";
import { Hero } from "../assets";

const Herosection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-40 mt-52 lg:mx-[10rem] justify-center m-auto lg:mb-72 mb-10">
      <div className="w-[20rem] lg:ml-5 m-auto">
        <h1 className="text-[68px] font-semibold">ehhllo</h1>
        <h3 className="italic text-3xl">/hello/</h3>
        <p className="font-[Raleway] ">
          An utterance of <span className="font-bold">‘hello’</span>; a greeting. puns on the popular colloquial
          greeting hello.
          <p>
            We are all about bringing everyone and everything closer to you.
          </p>
        </p>
        <button type='button' className="bg-red-600 text-white border-2 rounded-lg font-[Raleway] lg:mt-[45px] font-bold py-3 px-16">Read more</button>
      </div>
      <div className="lg:mt-0 mt-10 lg:mr-5 m-auto">
        <img src={Hero} alt="hero-img" className=" w-[20rem] h-[27rem]" />
      </div>
    </div>
  );
};

export default Herosection;
