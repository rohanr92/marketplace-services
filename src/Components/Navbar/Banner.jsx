import React, { useEffect } from "react";
import Header from "./Header";
import bannerVideo from "../../assets/banner-video.mp4"
import "./banner.css"
import Aos from "aos";
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Banner = () => {
    useEffect(()=> {

       Aos.init({
    duration: 4000,
    once: true,  
  });

    }, [])
  return (
    <div >
      <Header />

              <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            
 <section className="relative h-[650px] flex items-center justify-center text-center overflow-hidden">
        <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={bannerVideo}
          type="video/mp4"
        />
      </video>


      <div className="absolute inset-0 bg-[#2e1e11]/60"></div>




 
      <div className="relative z-10 text-white w-10/12 mx-auto sm:mt-[80px]" data-aos="fade-up">
        <p className="text-yellow-400 font-semibold text-lg mb-3">
          Creative Freelance Marketplace
        </p>

        <h1 className="text-4xl md:text-[50px] font-medium mb-6 leading-tight">
          Grow Business With <br /> <span className="font-surfer">Freelance Marketplace </span>  <br /> Solutions
        </h1>

        <div className="flex justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition">
            Get Started
          </button>
          <button className="border border-white/70 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
        </SwiperSlide>
        <SwiperSlide>

 <section className="relative h-[650px] flex items-center justify-center text-center overflow-hidden">
        <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={bannerVideo}
          type="video/mp4"
        />
      </video>


      <div className="absolute inset-0 bg-[#2e1e11]/60"></div>




 
      <div className="relative z-10 text-white w-10/12 mx-auto sm:mt-[80px]" data-aos="fade-up">
        <p className="text-yellow-400 font-semibold text-lg mb-3">
          Creative Freelance Marketplace
        </p>

        <h1 className="text-4xl md:text-[50px] font-medium mb-6 leading-tight">
          Grow Business With <br /> <span className="font-surfer">Freelance Marketplace </span>  <br /> Solutions
        </h1>

        <div className="flex justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition">
            Get Started
          </button>
          <button className="border border-white/70 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
        </SwiperSlide>
        <SwiperSlide>

 <section className="relative h-[650px] flex items-center justify-center text-center overflow-hidden">
        <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={bannerVideo}
          type="video/mp4"
        />
      </video>


      <div className="absolute inset-0 bg-[#2e1e11]/60"></div>




 
      <div className="relative z-10 text-white w-10/12 mx-auto sm:mt-[80px]" data-aos="fade-up">
        <p className="text-yellow-400 font-semibold text-lg mb-3">
          Creative Freelance Marketplace
        </p>

        <h1 className="text-4xl md:text-[50px] font-medium mb-6 leading-tight">
          Grow Business With <br /> <span className="font-surfer">Freelance Marketplace </span>  <br /> Solutions
        </h1>

        <div className="flex justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition">
            Get Started
          </button>
          <button className="border border-white/70 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
        </SwiperSlide>
      </Swiper>
   
    </div>
  );
};

export default Banner;
