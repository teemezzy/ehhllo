import React from "react";
import { iosIcon, googlePlayStore } from "../assets";

const BaseExpress = () => {
  return (
    <div className="bg-black text-white w-[1259px] flex flex-col justify-center m-auto py-[69.89px] pl-[29.97px] rounded-xl mb-[91.89px]">
      <div>
        <h1 className="lg:text-[70px] text-[45.22px] font-semibold ">Make money riding or driving</h1>
        <p className='text-[42.79px] font-[Raleway] opacity-50 font-normal'>Any kind of vehicle!</p>
      </div>

     <div className='flex'>
          <p className='text-[24px] font-[Raleway] w-[461.91px] lg:mr-[148.7px]'>
            Download the app, sign up, and start making extra cash whenever you
            want!
          </p>

          <div className='flex justify-evenly bg-white w-[387px] rounded-lg p-[17px]'>
          <img src={googlePlayStore} alt="Andriod App" />
            <img src={iosIcon} alt="IOS App" />
          </div>
     </div>
    </div>
  );
};

export default BaseExpress;
