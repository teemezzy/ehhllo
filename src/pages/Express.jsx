import React from 'react'
import Navbar from '../components/NavbarExpress/Navbar'
import MainExpress from '../components/MainExpress'
import BaseExpress from '../components/BaseExpress'
import FooterExpress from '../components/FooterExpress'

const Express = () => {
  return (
    <div>
        <Navbar />
        <MainExpress/>
        <BaseExpress/>
        <FooterExpress/>
    </div>
  )
}

export default Express