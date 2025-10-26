import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiCreditCard } from 'react-icons/fi';
import { IoEyeOutline } from 'react-icons/io5';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router';

const InvidualServices = ({ service }) => {
    // console.log(service);
    const { skillName, providerName, price, rating, category, Reviews, views, location, image, skillId } = service;

    return (
        <div className='transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 rounded-2xl'>
            <div className='p-[10px] border border-[#eee] rounded-2xl ' >

                <div className='w-full h-[240px]'>
                    <img src={image} alt={skillName} className='w-full h-full object-cover  rounded-2xl' />
                </div>
                <div className='flex justify-between items-center py-[15px]'>
                    <p className='font-bold text-[16px] text-gray-600'>{providerName}</p>
                    <div className='flex justify-center items-center gap-[5px] bg-yellow-100 rounded-[8px] p-[5px]'>
                        <IoEyeOutline className='text-yellow-600 font-bold' />
                        <p className='text-yellow-600 font-medium text-[13px]' >{views} views</p>
                    </div>
                </div>

                <div>
                    <p className='font-bold text-[18px]'>{skillName}</p>
                </div>
                <div className='py-[5px] flex items-center gap-[8px]'>
                    <FaStar className='text-[#fedb5c] text-[16px]' />
                    <p className='text-gray-600 text-[16px]'>{rating} ({Reviews})</p>
                </div>
                <div className='py-[5px] flex justify-between items-center'>
                    <div className='text-gray-600 text-[16px] font-medium flex items-center gap-[8px]'>
                        <FiCreditCard />
                        <p>Hourly Price</p>
                    </div>
                    <div className='text-black text-[16px]'>
                        <span>${price} /hr</span>
                    </div>

                </div>
                <div className='pb-[5px] flex justify-between items-center'>
                    <div className='text-gray-600 text-[16px] font-medium flex items-center gap-[8px]'>
                        <MdOutlineLocationOn className='text-[20px]' />
                        <p>Location</p>
                    </div>
                    <div className='text-black text-[16px]'>
                        <span>{location}</span>
                    </div>
                </div>
                <div className='pt-[30px]'>
                    <Link to={`/all-services/${skillId}`} className='btn btn-secondary w-full py-[23px] bg-yellow-500 hover:bg-yellow-600 text-black transition duration-300 text-[16px] outline-0 border-0 shadow-none'>View Details</Link>

                </div>


            </div>
        </div>
    );
};

export default InvidualServices;