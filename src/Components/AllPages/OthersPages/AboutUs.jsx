import React from 'react';
import Faqs from '../AllSection/Faqs';

const AboutUs = () => {
    return (
        <div className=' min-h-screen '>
            <div className="flex items-center justify-center pt-12 px-4">
                <div className="max-w-6xl w-full bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">

                    {/* Left Image */}
                    <div className="md:w-1/2">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKj-z_Mq-OoN06FxTxHLOBSgWKZ1la6FSM-Q&s"
                            alt="About Us"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Text */}
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
                        <p className="text-gray-600 mb-4">
                            We are a passionate team dedicated to providing the best services for our clients.
                            Our mission is to deliver high-quality solutions with integrity and excellence.
                        </p>
                        <p className="text-gray-600">
                            With years of experience in the industry, we pride ourselves on understanding our clients needs and providing innovative, tailored solutions.
                            Your success is our priority.
                        </p>
                    </div>
                </div>


            </div>
            <Faqs></Faqs>

        </div>
    );
};

export default AboutUs;