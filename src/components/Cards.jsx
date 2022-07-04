import React from "react";

const Cards = () => {
  return (
    <div className="flex lg:flex-row flex-col w-[1060px] m-auto justify-around lg:-translate-x-20">
      <div className=" flex flex-col gap-10 justify-around  ">
        <div className="bg-[#3C6E71] w-[450px] px-[30px] pt-[28px] pb-[41.89px] text-white rounded-xl">
          <h1 className="text-5xl font-semibold">Who we serve</h1>
          <p className="text-[24px] mt-[20.11px] font-[Raleway]">
            Whether you are an individual wanting to send/receive an item, a
            market/online seller who requires fast and easy access to dispatch
            to customers, or a corporate body needing the services of a
            dispatcher to send important documents, we are built to serve you!
          </p>
        </div>

        <div className="bg-[#353535] w-[450px]  px-[30px] pt-[28px] pb-[41.89px] text-white rounded-xl">
          <h1 className="text-5xl font-semibold">Why partner?</h1>
          <p className="text-[24px] mt-[20.11px] font-[Raleway]">
            We are giving you a competitive pool of demand for dispatch
            services, a wallet system that guarantees user payment security, and
            a platform that gives access to different dispatch forms, thereby
            creating a profit stream for all vehicle types. We also have
            competitive rates that ensure the platform is profitable to all
            partners.
          </p>
        </div>
      </div>

      <div className="bg-[#284B63] w-[450px] h-[700px] pt-[28px] pb-[41.89px] lg:ml-[160px] lg:px-[30px] text-white rounded-xl">
        <h1 className="text-5xl font-semibold">Why use us?</h1>
        <p className="text-[24px] mt-[20.11px] font-[Raleway] ">
          We have a system that gives users access to different types of
          vehicles within close proximity, thereby making access to dispatch
          faster. <br/> We have a regulated pricing structure that makes dispatch
          cheaper while giving the users the power to vet logistics providers
          and operators, thereby reducing bad experiences and making the system
          more reliable. <br/>We have an inbuilt Wallet that leverages modern payment
          technology that ensures swift and easy payment.
        </p>
      </div>
    </div>
  );
};

export default Cards;
