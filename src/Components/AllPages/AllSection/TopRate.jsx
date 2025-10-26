import React from 'react';
import Container from '../../Container/Container';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { Link } from 'react-router';
import { motion } from "framer-motion";
import { fadeIn } from '../../../variants';


const TopRate = () => {
    return (
        <div>
            <Container>
                <div className='py-20'>

                    <motion.div className="text-center px-6"

                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}


                    >
                        <span className="bg-yellow-500 font-semibold text-sm px-4 py-2 rounded-full">
                            Featured Providers
                        </span>
                        <h2 className="mt-6 text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
                            Find Most Talented Freelancers
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                            Discover most-recent popular skill, that will help your business to lift up very quickly. Find your perfect soft skill partner.
                        </p>
                    </motion.div>





                    <div className="flex justify-center p-8"
              


                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-[1200px]">




                            <div className="bg-white rounded-xl pb-[10px] shadow-md text-center flex flex-col items-center border border-amber-100 w-full sm:w-auto">
                                <div className="w-full h-[170px] overflow-hidden rounded-lg mb-4 p-[5px]">
                                    <img
                                        src="https://workreap.amentotech.com/wp-content/uploads/2024/04/5-1714127904-1714127904-600x600.jpg"
                                        alt="Jane Doe"
                                        className="w-full h-full object-cover block rounded-lg"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1 flex items-center justify-center gap-1">
                                    Jane Doe <span className="text-[25px] text-[#21c55e]"><IoMdCheckmarkCircle /></span>
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 h-10 flex items-center justify-center text-center">
                                    Experienced Web Developer
                                </p>
                                <Link to='/about' className="py-2 px-5 rounded-full text-sm font-medium transition-colors duration-200 min-w-[120px] bg-gray-100 text-gray-800 hover:bg-yellow-500 cursor-pointer">
                                    View Profile
                                </Link>
                            </div>









                            <div className="bg-white rounded-xl pb-[10px] shadow-md text-center flex flex-col items-center border border-amber-100 w-full sm:w-auto">
                                <div className="w-full h-[170px] overflow-hidden rounded-lg mb-4 p-[5px]">
                                    <img
                                        src="https://workreap.amentotech.com/wp-content/uploads/2024/04/15-1714461450-1714461450-600x600.jpg"
                                        alt="Funky Ponky"
                                        className="w-full h-full object-cover block rounded-lg"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1 flex items-center justify-center gap-1">
                                    Funky Ponky <span className="text-[25px] text-[#21c55e]"><IoMdCheckmarkCircle /></span>
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 h-10 flex items-center justify-center text-center">
                                    Digital Marketing Manager
                                </p>
                                <Link to='/about' className="py-2 px-5 rounded-full text-sm font-medium transition-colors duration-200 min-w-[120px] bg-gray-100 text-gray-800 hover:bg-yellow-500 cursor-pointer">
                                    View Profile
                                </Link>
                            </div>

                            <div className="bg-white rounded-xl pb-[10px] shadow-md text-center flex flex-col items-center border border-amber-100 w-full sm:w-auto">
                                <div className="w-full h-[170px] overflow-hidden rounded-lg mb-4 p-[5px]">
                                    <img
                                        src="https://workreap.amentotech.com/wp-content/uploads/2024/04/16-1714463451-1714463451-600x600.jpg"
                                        alt="Yuki Tanaka"
                                        className="w-full h-full object-cover block rounded-lg"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1 flex items-center justify-center gap-1">
                                    Yuki Tanaka <span className="text-[25px] text-[#21c55e]"><IoMdCheckmarkCircle /></span>
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 h-10 flex items-center justify-center text-center">
                                    Search Engine Marketing
                                </p>
                                <Link to='/about' className="py-2 px-5 rounded-full text-sm font-medium transition-colors duration-200 min-w-[120px] bg-gray-100 text-gray-800 hover:bg-yellow-500 cursor-pointer">
                                    View Profile
                                </Link>
                            </div>




                            <div className="bg-white rounded-xl pb-[10px] shadow-md text-center flex flex-col items-center border border-amber-100 w-full sm:w-auto">
                                <div className="w-full h-[170px] overflow-hidden rounded-lg mb-4 p-[5px]">
                                    <img
                                        src="https://workreap.amentotech.com/wp-content/uploads/2024/04/13-1714456650-1714456650-600x600.jpg"
                                        alt="Tara Babu"
                                        className="w-full h-full object-cover block rounded-lg"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1 flex items-center justify-center gap-1">
                                    Tara Babu <span className="text-[25px] text-[#21c55e]"><IoMdCheckmarkCircle /></span>
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 h-10 flex items-center justify-center text-center">
                                    Ethical Hacking Expert
                                </p>
                                <Link to='/about' className="py-2 px-5 rounded-full text-sm font-medium transition-colors duration-200 min-w-[120px] bg-gray-100 text-gray-800 hover:bg-yellow-500 cursor-pointer">
                                    View Profile
                                </Link>
                            </div>

                        </div>
                    </div>


                </div>
            </Container>





        </div>
    );
};

export default TopRate;
