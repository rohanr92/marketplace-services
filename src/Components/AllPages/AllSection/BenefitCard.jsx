import React, { useEffect } from 'react';
import Container from '../../Container/Container';
import image1 from "../../../assets/img-01.png"
import image2 from "../../../assets/img-02.png"
import image3 from "../../../assets/img-03.png"
import Aos from "aos";
import 'aos/dist/aos.css';




const ArrowRightIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
    viewBox="0 0 20 20" 
    fill="currentColor"
  >
    <path 
      fillRule="evenodd" 
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
      clipRule="evenodd" 
    />
  </svg>
);

// SVG Icon for the floating action button
const ArrowUpIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);


const BenefitCard = () => {


useEffect(() => {
  Aos.init({
    duration: 700,
    once: true,
  });
  
}, []);


    return (
        <div>
            <Container>
            <section className="bg-white relative py-15 md:py-15 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        

        <div className="text-center" data-aos="fade-up">
          <span className="bg-yellow-500 font-semibold text-sm px-4 py-2 rounded-full">
            Step-by-step guide
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
            Unlock Your Learning Potential Easily
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Discover expert-curated articles, guides, tutorials, and resources to
            elevate your learning journey
          </p>
        </div>

     
        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" data-aos="fade-up">
       
          <div 
            key={1} 
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className='px-[32px]'>
                   <img 
              className="object-cover  h-[120px]  w-[158px]" 
              src={image1}
              alt='Signup Workreap' 
            />

            </div>
         
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Signup Workreap
              </h3>
              <p className="mt-3 text-base text-gray-600">
                Join our platform by creating your account in just a few clicks and become part of a dynamic freelance community.
              </p>
              <a 
                href="#" 
                className="group mt-6 inline-flex items-center text-yellow-500 font-semibold hover:text-black transition-colors"
              >
                Learn more
                <ArrowRightIcon />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            key={2} 
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className='px-[32px]'>
       <img 
              className="h-[120px] object-cover w-[132px] " 
              src={image2}
              alt='Find Your Freelancer' 
            />

            </div>
     
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Find Your Freelancer
              </h3>
              <p className="mt-3 text-base text-gray-600">
                Browse through projects or find top talent that fits your skills and requirements, making collaboration easy and efficient.
              </p>
              <a 
                href="#" 
                className="group mt-6 inline-flex items-center text-yellow-500 font-semibold hover:text-black transition-colors"
              >
                Learn more
                <ArrowRightIcon />
              </a>
            </div>
          </div>

       
          <div 
            key={3} 
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 "
          >

             <div className='px-[32px]'>

<img 
              className="h-[120px] object-cover w-[170px] " 
              src={image3}
              alt='Collaborate & Succeed' 
            />
             </div>
            
            
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Collaborate & Succeed
              </h3>
              <p className="mt-3 text-base text-gray-600">
                Connect, collaborate, and manage your projects seamlessly while building lasting success and relationships.
              </p>
              <a 
                href="#" 
                className="group mt-6 inline-flex items-center text-yellow-500 font-semibold hover:text-black transition-colors"
              >
                Learn more
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
     
    </section>
    </Container>
        </div>
    );
};

export default BenefitCard;