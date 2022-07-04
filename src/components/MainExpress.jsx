import React from "react";
import { ExpressHero, iosIcon, googlePlayStore } from "../assets";

const MainExpress = () => {
  return (
    <div>
      <div className=" lg:flex flex-col lg:flex-row lg:justify-between justify-center lg:gap-36 lg:items-center lg:mt-[170.19px mt-32 m-auto lg:w-[1290px] lg:px-[45px] justify-center lg:mb-[100px] mb-10">
        <div className="m-auto lg:-translate-y-9">
          <h1 className="lg:text-[60px] text-[48px] lg:w-[28.8rem] w-[349px] font-bold text-[#284B63]">
            Cheap, fast, and easy dispatch
          </h1>

          <p className="font-[Raleway] lg:text-[24px] text-[14px] lg:w-[460px] w-[259px] text-[#353535]">
            Easiest and fastest way to get a dispatch service provider close to
            you!
          </p>

          <div className="bg-black text-white flex flex-col lg:justify-center lg:px-[58px] px-[12.14px] py-[36px] lg:w-[437px] w-[354px] rounded-xl mb-16 pb-6">
            <p className="lg:font-black font-semibold lg:tracking-wide tracking-[0.01em] text-[32px] lg:w-[321px]">
              Launching soon
            </p>
            <p className="lg:text-[24px] text-[14px] font-normal opacity-50 font-[Raleway]">
              Stay Updated
            </p>
            <div>
              <div className=" ">
                <input
                  type="text"
                  placeholder="Email"
                  className="p-2 lg:w-full w-[220px] lg:translate-y-7 font-[Raleway]"
                />
                <button
                  type="button"
                  className="bg-red-600 text-white rounded-lg font-[Raleway] lg:mt-[45px] mt-4 font-bold lg:py-3 lg:px-16 py-[8px] px-[59px]"
                >
                  Submit
                </button>
              </div>
              <p className=" lg:text-[12px] text-[8px] lg:w-full w-[179px] font-light font-[Raleway] text-[gray] mt-2 ">
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
          <div className="flex gap-5 justify-center mt-[10px]">
            <a href="https://apple.com">
              <img src={iosIcon} alt="IOS APP" />
            </a>
            <a href="https://google.com">
              <img src={googlePlayStore} alt="ANDRIOD APP" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainExpress;
