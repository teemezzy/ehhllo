import React from "react";

const Base = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col justify-center m-auto w-[75%] rounded-xl mb-16">
        <div className="flex flex-col justify-center pl-8 lg:py-16 pt-3 pb-">
          <p className="font-semibold lg:text-6xl text-3xl pb-5">
            Join the <span className="text-red-600">ehhllo</span> community!
          </p>
          <div className="lg:flex justify-between lg:w-[75%] gap-24">
            <div className='lg:w-[70%]'>
              <p className="font-[Raleway] tracking-wide lg:text-[30px] font-light text-[gray]">
                Be the first to know
              </p>
              <p className="font-[Raleway]  lg:text-[18px]  ">
                Sign up for ehhllo emails to be the first to see inspiring
                content, news, updates and exclusive offers.
              </p>
            </div>

            <div>
              <div className=" ">
                <input type="text" placeholder="Email" className="p-2 w-full lg:translate-y-7 " />
                <button
                  type="button"
                  className="bg-red-600 text-white rounded-lg font-[Raleway] lg:mt-[45px] font-bold py-3 px-16"
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
      </div>
      <div className='w-3/5 lg:ml-[12rem] mt-[60px] mb-28'>
        <p className="text-6xl font-semibold">Wish to partner</p>
        <div className="flex flex-row mt-4 m-auto items-center">
          <p className="text-6xl pr-20 font-semibold"> with us?</p>
          <button className="text-white bg-red-600 py-[10px] px-12 font-[Raleway] font-bold text-[16px]">Contact us here </button>
        </div>
      </div>
    </>
  );
};

export default Base;
