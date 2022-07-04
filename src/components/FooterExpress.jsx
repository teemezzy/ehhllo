import React from "react";
import {BsCircle} from "react-icons/bs";
import {BsCircleFill} from 'react-icons/bs'

const FooterExpress = () => {
  return (
    <>
      {/* Offline Traction */}
      <div className="bg-black text-white lg:py-[64px] py-[39px] lg:px-[30px] px-[12px] lg:w-[1261px] w-[354px] m-auto rounded-xl mt-[60px]">
        <div className="">
          <h1 className="lg:text-5xl text-[32px] font-semibold">Our Offline Traction</h1>
          <p className="lg:w-[61rem] lg:text-[24px] text-[12px] w-[294px] font-[Raleway]">
            To ensure our product is viable and needed we created an offline
            replica of the app using customer service as the link while the
            developers are working on the app. In 3 months we have these figures
          </p>

          <div className="flex lg:flex-row flex-col justify-start">
            <div className='flex justify-between'>
            <div className="lg:pr-[136.47px]">
              <h1 className="lg:text-5xl text-[32px] font-semibold mb-[10px] ">40+</h1>
              <p className="lg:text-[24px] text-[14px] font-[Raleway]">Active Users</p>
              <p className="lg:text-[14px] text-[12px] mt-[9px] font-[Raleway] lg:w-[269.53px] w-[155px] opacity-95">
                With man-man marketing and refferals, we are having more
                businesses and individuals actively using our service
              </p>
            </div>

            <div className="lg:pr-[136.47px] ">
              <h1 className="lg:text-5xl text-[32px] font-semibold mb-[10px]">350+</h1>
              <p className="lg:text-[24px] text-[14px] font-[Raleway]">
                Completed Transaction
              </p>
              <p className="lg:text-[14px] text-[12px] mt-[9px] font-[Raleway] lg:w-[269.53px] w-[155px] opacity-95">
                Beyond these figure are transactions with that are making people
                refer and long for the app release
              </p>
            </div>
            </div>

            <div className=" ">
              <h1 className="lg:text-5xl text-[32px] font-semibold mb-[10px]">70%</h1>
              <p className="lg:text-[24px] text-[14px font-[Raleway]">Positive Feedback</p>
              <p className="lg:text-[14px] text-[12px] mt-[9px] font-[Raleway] lg:w-[269.53px] w-[155px] opacity-95">
                We always try to collect feeedback from users and dispatch
                partners. So far, we are getting more positive feedbacks.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Sensational Blitze */}
      <div className="flex flex-col m-auto bg-[#284B63] rounded-xl mt-[40px] w-[354px] lg:w-[1261px] text-white text-center lg-py-[60px] py-[19px]">
        <p className=" lg:w-[565px] m-auto lg:text-[24px] text-[10px] font-light w-[266px] font-[Raleway]">
          Beyond these figure are transactions with that are making people refer
          and long for the app release
        </p>

        <p className="lg:text-[24px] mt-[13px] text-[10px] font-semibold">Sensational Bitez</p>
        <p className="lg:text-[14px] mt-[5px] text-[8px] italic font-[Raleway]">Business</p>

        <div className='flex m-auto lg:mt-[42.69px] mt-[10px]'>
          <BsCircleFill className='lg:w-[20px] w-[5.61px] lg:mr-[10px] mr-[2.81px]' />
          <BsCircleFill className='lg:w-[20px] w-[5.61px] text-[#C4C4C4] lg:mr-[10px] mr-[2.81px]'/>
          <BsCircleFill className='lg:w-[20px] w-[5.61px] text-[#C4C4C4] lg:mr-[10px] mr-[2.81px]'/>
          <BsCircleFill className='lg:w-[20px] w-[5.61px] text-[#C4C4C4] lg:mr-[10px] mr-[2.81px]'/>
          <BsCircleFill className='lg:w-[20px] w-[5.61px] text-[#C4C4C4]'/>
        </div>
      </div>

      {/* Wish to partner with us */}

      
      <div className='hidden lg:block'>
      <div className='flex flex-row justify-around items-center m-auto w-[1261px] mt-[60px]  '>
      <div className="lg:mb-28 mb-10 ">
        <p className="lg:text-6xl text-3xl font-semibold lg:w-[590px]">
          Wish to partner
        </p>
        <div className="lg:flex lg:flex-row mt-4 items-center">
          <p className="lg:text-6xl text-3xl font-semibold">with us?</p>
          <button className="text-white lg:ml-24 lg:mt-0 mt-3 ml-14 bg-red-600 py-[10px] px-12 font-[Raleway] font-bold text-[16px]">
            Contact us here
          </button>
        </div>
      </div>

      <div className="bg-black text-white flex flex-col justify-center px-[58px] py-[36px] lg:w-[437px] rounded-xl mb-16 pb-6">
            <p className="font-black tracking-wide text-[32px] w-[321px]">
              Launching soon
            </p>
            <p className="text-[24px] font-normal opacity-50 font-[Raleway]">
              Stay Updated
            </p>
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
      </div>

      <div className='block lg:hidden w-[186px] py-[40px] ml-[30px]'>
        <h1 className='text-[24px]'>Wish to invest in ehhllo
        e<span className="text-red-600">X</span>press?</h1>
        <button className="text-white lg:mt-0 mt-3 bg-red-600 py-[8px] px-[33.5px] font-[Raleway] font-bold text-[12px]">
            Contact us here
          </button>
      </div>
    </>
  );
};

export default FooterExpress;
