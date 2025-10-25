import React from 'react';
import { FaCheckCircle, FaPlayCircle } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs';
import { Link } from 'react-router';
import Container from '../../Container/Container';


const NewLeft = () => {
    return (
        <div className="bg-yellow-600 text-white">

            <Container>



            <div>
    
      <div className="px-[12px] py-8 lg:py-16 grid lg:grid-cols-2 gap-12 items-center"  data-aos="fade-up">
        
       
        <div>
          <p className="font-semibold text-sm mb-2 opacity-90">
            See How It Works
          </p>
          <h1 className="text-4xl lg:text-5xl font-medium mb-4">
            Global Trust of 1 Million Businesses and Counting
          </h1>
          <p className="text-lg mb-6 opacity-90">
            Connect with skilled professionals, streamline collaboration, and unlock
            success. Join now and redefine your work experience!
          </p>

 
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2">
              <FaCheckCircle />
              <span>Connect with pros collaborate better succeed faster</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle />
              <span>Redefine work. Join now for a better experience</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle />
              <span>Streamline collaboration unlock success</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle />
              <span>Join us redefine your work experience</span>
            </li>
          </ul>

   
          <Link to='/about'
            className="border border-white rounded-xl py-3 px-8 text-center font-semibold 
                       hover:bg-white hover:text-black transition-colors"
          >
            Get Started
          </Link>
        </div>

       
        <div className="relative">
      
          <img 
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Colleagues working on laptop" 
            className="rounded-lg w-full h-auto object-cover" 
          />

        </div>
        
      </div>
    </div>
    </Container>
            
        </div>
    );
};

export default NewLeft;