import React from 'react';
import Container from '../../Container/Container';
import icon1 from '../../../assets/icon1.png'
import { motion } from "framer-motion";
import { fadeRight } from '../../../variants2';

const Talent = () => {
    return (
        <div className='bg-[#f7f7f8]'>
            <Container>
                <div >
                    <motion.div className='sm:flex sm:justify-between sm:space-y-[2px] space-y-[50px] py-[80px]' 
                    
                      variants={fadeRight("right", 0.2)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.7 }}
                    >

                        <div className='place-items-center space-y-[10px]'>
                            <img src={icon1} alt="" />
                            <div className='text-center'>
                                <h3 className='text-black font-medium text-[28px]'>120+ million</h3>
                                <p className='text-gray-500 text-[17px]'>Active Talent</p>
                            </div>
                        </div>


                                                <div className='place-items-center space-y-[10px]'>
                            <img src={icon1} alt="" />
                            <div className='text-center'>
                                <h3 className='text-black font-medium text-[28px]'>120+ million</h3>
                                <p className='text-gray-500 text-[17px]'>Active Talent</p>
                            </div>
                        </div>



                                                <div className='place-items-center space-y-[10px]'>
                            <img src={icon1} alt="" />
                            <div className='text-center'>
                                <h3 className='text-black font-medium text-[28px]'>120+ million</h3>
                                <p className='text-gray-500 text-[17px]'>Active Talent</p>
                            </div>
                        </div>


                                                <div className='place-items-center space-y-[10px]'>
                            <img src={icon1} alt="" />
                            <div className='text-center'>
                                <h3 className='text-black font-medium text-[28px]'>120+ million</h3>
                                <p className='text-gray-500 text-[17px]'>Active Talent</p>
                            </div>
                        </div>



                    </motion.div>



                </div>


            </Container>
            
        </div>
    );
};

export default Talent;