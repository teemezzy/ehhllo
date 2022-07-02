import React from "react";
import Navbar from "../components/NavbarExpress/Navbar";
import MainExpress from "../components/MainExpress";
import BaseExpress from "../components/BaseExpress";
import FooterExpress from "../components/FooterExpress";
import Cards from "../components/Cards";

const Express = () => {
  return (
    <div>
      <Navbar />
      <MainExpress />
      <BaseExpress />
      <Cards />
      
      <FooterExpress />
    </div>
  );
};

export default Express;
