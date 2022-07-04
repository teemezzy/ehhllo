import React from "react";
import { iosIcon, googlePlayStore } from "../assets";

const BaseExpress = () => {
  return (
    <div className="bg-black text-white lg:w-[1259px] w-[354px] flex flex-col justify-center m-auto py-[69.89px] lg:pl-[29.97px] px-[12px] rounded-xl mb-[91.89px]">
      <div>
        <h1 className="lg:text-[70px] text-[32px] font-semibold ">
          Make money riding or driving
        </h1>
        <p className="lg:text-[42.79px] text-[14px] font-[Raleway] opacity-50 font-normal">
          Any kind of vehicle!
        </p>
      </div>

      <div className="lg:flex">
        <p className="lg:text-[24px] text-[12px] font-[Raleway] lg:w-[461.91px] w-[248px] lg:mr-[148.7px]">
          Download the app, sign up, and start making extra cash whenever you
          want!
        </p>

        <div className="flex justify-evenly bg-white lg:w-[387px] w-[221.8px] m-auto rounded-lg p-[17px]">
          <a href="https://playstore.google.com">
            <img src={googlePlayStore} alt="Andriod App" />
          </a>
          <a href="https://apple.com">
            <img src={iosIcon} alt="IOS App" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BaseExpress;
