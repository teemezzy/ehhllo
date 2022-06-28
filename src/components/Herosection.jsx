import React from "react";
import { Hero } from "../assets";

const Herosection = () => {
  return (
    <div className=" flex flex-col lg:flex-row lg:justify-between gap-36 lg:items-center lg:mt-[170.19px] mt-32 m-auto w-[1290px] px-[45px] justify-center lg:mb-72 mb-10">
      <div className=" m-auto -translate-y-9">
        <h1 className="lg:text-[68.89px] text-[45.22px] font-semibold">
          ehhllo
        </h1>
        <h3 className="italic text-[32px] mb-[20px]">/hello/</h3>
        <p className="font-[Raleway] text-[24px] w-[460px]">
          An utterance of <span className="font-bold ">‘hello’</span>; a
          greeting. puns on the popular colloquial greeting hello.
          <p className="mt-5">
            We are all about bringing everyone and everything closer to you.
          </p>
        </p>
        <button
          type="button"
          className="bg-red-600 text-white border-2 rounded-lg font-[Raleway] lg:mt-[45px] font-bold py-[10.5px] px-[70px]"
        >
          Read more
        </button>
      </div>
      <div className="lg:mt-0 mt-10 m-auto">
        <img
          src={Hero}
          alt="hero-img"
          className=" w-[36.858rem] h-[43.858rem]"
        />
      </div>
    </div>
  );
};

export default Herosection;
