import React from "react";

const Base = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col justify-center m-auto w-[1290px] rounded-xl mb-16 pb-6">
        <div className="flex flex-col justify-center pl-8 lg:py-16 pt-3 pb-">
          <p className="font-semibold lg:text-6xl text-3xl pb-5">
            Join the <span className="text-red-600">ehhllo</span> community!
          </p>
          <div className="lg:flex justify-between lg:w-[75%] w-[85%] gap-24">
            <div className='lg:w-[70%]'>
              <p className="font-[Raleway] tracking-wide lg:text-[30px] font-light text-[gray] mb-2">
                Be the first to know
              </p>
              <p className="font-[Raleway]  lg:text-[18px] text-[12px] lg:font-normal font-light tracking-wider ">
                Sign up for ehhllo emails to be the first to see inspiring
                content, news, updates and exclusive offers.
              </p>
            </div>

            <div>
              <div className=" ">
                <input type="text" placeholder="Email" className="p-2 w-full lg:translate-y-7 " />
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
      </div>
      <div className=' mt-[60px] lg:mb-28 mb-10 lg:w-[1290px] m-auto'>
        <p className="lg:text-6xl text-3xl pl-14 font-semibold w-[590px]">Wish to partner</p>
        <div className="lg:flex lg:flex-row mt-4 m-auto items-center">
          <p className="lg:text-6xl text-3xl pl-14  font-semibold">with us?</p>
          <button className="text-white lg:ml-24 lg:mt-0 mt-3 ml-14 bg-red-600 py-[10px] px-12 font-[Raleway] font-bold text-[16px]">Contact us here </button>
        </div>
      </div>
    </>
  );
};

export default Base;
