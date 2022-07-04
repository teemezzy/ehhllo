import React from 'react'
import Navbar from '../components/NavbarExpress/Navbar'

const About = () => {
  return (
    <div>
        <Navbar />

        <h1 className='text-5xl lg:text-[60px] lg:font-normal font-bold mt-[100px] w-[349px] m-auto lg:text-center text-[#284B63] lg:text-[#353535]
] lg:mt-[185px]'>About Us</h1>
        <div className='mt-[62px] lg:w-[858px] w-[349px] lg:text-center lg:text-[#284B63] m-auto'>
        <h3 className='text-[21.37px] lg:text-[40px]  font-[Raleway]  mt-[12px] font-semibold'>Mission</h3>
        <p className='font-[Raleway] text-[14px] lg:text-[24px] '>To eliminate the long wait time and bad service associated with dispatches within Lagos and Nigeria at large. ehhllo eXpress also intends to become the primary source through which existing large, medium, and small-scale businesses can gain easy access to customers in need of dispatch services. With transaction automation, we are on a mission to ensure 15-minute pickup time becomes a possibility.</p>
        </div>

        <div className='mt-[62px] lg:w-[858px] w-[349px] m-auto mb-[100px] lg:text-center lg:text-[#284B63]'>
            <h3 className='text-[21.37px] lg:text-[40px] font-[Raleway]  mt-[12px] font-semibold'>Vision</h3>
            <p className='font-[Raleway] text-[14px] lg:text-[24px]'>To eliminate the long wait time and bad service associated with dispatches within Lagos and Nigeria at large. ehhllo eXpress also intends to become the primary source through which existing large, medium, and small-scale businesses can gain easy access to customers in need of dispatch services. With transaction automation, we are on a mission to ensure 15-minute pickup time becomes a possibility.</p>
        </div>


    </div>
  )
}

export default About