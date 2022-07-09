import React from "react";

const Cards = () => {
  return (
    <div className="lg:flex lg:flex-row flex-col lg:w-[1060px] w-[354px] m-auto justify-around lg:-translate-x-20">
      <div className=" flex flex-col gap-10">
        <div className="bg-[#3C6E71] lg:w-[450px] w-[354px] lg:px-[30px] pl-[10px] pr-[24px] lg:pt-[28px] lg:pb-[41.89px] py-[13px] text-white rounded-xl">
          <h1 className="lg:text-5xl text-[32px] font-semibold lg:text-left lg:w-full w-[287px]">Who we serve</h1>
          <p className="lg:text-[24px] lg:w-full w-[287px] text-[13px] lg:mt-[20.11px] mt-[10px] font-[Raleway] lg:text-left">
            Whether you are an individual wanting to send/receive an item, a
            market/online seller who requires fast and easy access to dispatch
            to customers, or a corporate body needing the services of a
            dispatcher to send important documents, we are built to serve you!
          </p>
        </div>

        <div className="bg-[#353535] lg:w-[450px] w-[354px] lg:px-[30px] pl-[10px] pr-[24px] lg:pt-[28px] lg:pb-[41.89px] py-[13px] text-white rounded-xl flex flex-col justify-end m-auto">
          <h1 className="lg:text-5xl text-[32px] font-semibold lg:text-left lg:w-full w-[313px]">Why partner?</h1>
          <p className="lg:text-[24px] text-[13px] lg:w-full w-[313px] lg:mt-[20.11px] mt-[10px] font-[Raleway] lg:text-left ">
            We are giving you a competitive pool of demand for dispatch
            services, a wallet system that guarantees user payment security, and
            a platform that gives access to different dispatch forms, thereby
            creating a profit stream for all vehicle types. We also have
            competitive rates that ensure the platform is profitable to all
            partners.
          </p>
        </div>
      </div>

      <div className="bg-[#284B63] lg:w-[450px] w-[354px] lg:h-[700px] lg:mt-0 mt-10 lg:px-[30px] pl-[10px] pr-[24px] lg:pt-[28px] lg:pb-[41.89px] py-[13px] lg:ml-[160px] text-white rounded-xl">
        <h1 className="lg:text-5xl text-[32px] font-semibold lg:text-left lg:w-full w-[287px]">Why use us?</h1>
        <p className="lg:text-[24px] text-[13px] lg:mt-[20.11px] mt-[10px] font-[Raleway] lg:text-left lg:w-full w-[306px]">
          We have a system that gives users access to different types of
          vehicles within close proximity, thereby making access to dispatch
          faster. <br/> We have a regulated pricing structure that makes dispatch
          cheaper while giving the users the power to vet logistics providers
          and operators, thereby reducing bad experiences and making the system
          more reliable. <br/>We have an inbuilt Wallet that can leverage modern payment technology to ensure swift and easy payment.
        </p>
      </div>
    </div>
  );
};

export default Cards;
