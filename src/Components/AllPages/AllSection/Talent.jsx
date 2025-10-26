import React from 'react';
import Container from '../../Container/Container';
import icon1 from '../../../assets/icon1.png'


const Talent = () => {
    return (
        <div className='bg-[#f7f7f8]'>
            <Container>
                <div >
                    <div className='sm:flex sm:justify-between sm:space-y-[2px] space-y-[50px] py-[80px]' 
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



                    </div>



                </div>


            </Container>
            
        </div>
    );
};

export default Talent;