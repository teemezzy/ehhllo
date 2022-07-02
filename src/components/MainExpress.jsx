import React from "react";
import { ExpressHero, iosIcon, googlePlayStore } from "../assets";

const MainExpress = () => {
  return (
    <div>
      <div className=" flex flex-col lg:flex-row lg:justify-between gap-36 lg:items-center lg:mt-[170.19px] mt-32 m-auto lg:w-[1290px]  px-[45px] justify-center lg:mb-[100px] mb-10">
        <div className="m-auto -translate-y-9">
          <h1 className="lg:text-[60px] text-[45.22px] w-[28.8rem] font-bold text-[#284B63]">
            Cheap, fast, and easy dispatch
          </h1>

          <p className="font-[Raleway] lg:text-[24px] lg:w-[460px] w-[332.px] text-[#353535]">
            Easiest and fastest way to get a dispatch service provider close to
            you!
          </p>

          <div className="bg-black text-white flex flex-col justify-center px-[58px] py-[36px] lg:w-[437px] rounded-xl mb-16 pb-6">
            <p className="font-black tracking-wide text-[32px] w-[321px]">
              Launching soon
            </p>
            <p className="text-[24px] font-normal opacity-50 font-[Raleway]">Stay Updated</p>
            <div>
              <div className=" ">
                <input
                  type="text"
                  placeholder="Email"
                  className="p-2 w-full lg:translate-y-7 font-[Raleway]"
                />
                <button
                  type="button"
                  className="bg-red-600 text-white rounded-lg font-[Raleway] lg:mt-[45px] mt-4 font-bold py-3 px-16"
                >
                  Submit
                </button>
              </div>
              <p className=" text-[12px] font-light font-[Raleway] text-[gray] mt-2 ">
                By submitting, you agree to receive updates from ehhllo. You may
                unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mt-0 mt-[37px] m-auto">
          <img
            src={ExpressHero}
            alt="hero-img"
            className=" lg:w-[36.858rem] lg:h-[47rem]"
          />
          <div className='flex gap-5 justify-center mt-[10px]'>
            <a href="https://apple.com"><img src={iosIcon} alt="IOS APP" /></a>
            <a href="https://google.com"><img src={googlePlayStore} alt="ANDRIOD APP" /></a>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainExpress;
