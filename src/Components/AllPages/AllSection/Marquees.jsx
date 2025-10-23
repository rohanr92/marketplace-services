import React from 'react';
import Marquee from "react-fast-marquee";
import fedex from "../../../assets/fedex.svg"
import abbott from "../../../assets/abbott.svg"
import google from "../../../assets/google.svg"
import netflix from "../../../assets/netflix.svg"
import paypal from "../../../assets/paypal.svg"
import toyota from "../../../assets/toyota.svg"
import visa from "../../../assets/visa.svg"

const Marquees = () => {
    return (
        <div className='pt-[40px]'>
<div className="relative overflow-hidden w-full">
  
  <div className="absolute left-0 top-0 h-full w-50 bg-gradient-to-r from-white to-transparent z-10"></div>

  <Marquee>
    <div className="w-[200px] mx-auto">
        <img src={fedex} alt="" className="w-[143px] h-[55px]" /></div>


    <div className="w-[200px] mx-auto"><img src={abbott} alt="" className="w-[143px] h-[55px]" />
    </div>



    <div className="w-[200px] mx-auto">
        <img src={google} alt="" className="w-[143px] h-[55px]" />
        </div>


    <div className="w-[200px] mx-auto">
        <img src={netflix} alt="" className="w-[143px] h-[55px]" />
        </div>


    <div className="w-[200px] mx-auto">
        <img src={paypal} alt="" className="w-[143px] h-[55px]" />
        </div>


    <div className="w-[200px] mx-auto">
        <img src={toyota} alt="" className="w-[143px] h-[55px]" /></div>


    <div className="w-[200px] mx-auto">
        <img src={visa} alt="" className="w-[143px] h-[55px]" />
    </div>
  </Marquee>

 
  <div className="absolute right-0 top-0 h-full w-50 bg-gradient-to-l from-white to-transparent z-10"></div>
</div>
            
        </div>
    );
};

export default Marquees;