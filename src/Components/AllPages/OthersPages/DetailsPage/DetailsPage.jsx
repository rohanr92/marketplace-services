import React, { useState } from 'react';
import { Link, useParams } from 'react-router';
import useServices from '../../../Hook/useServices';
import Container from '../../../Container/Container';
import { FaEye, FaStar } from 'react-icons/fa';
import { BiSolidLike } from 'react-icons/bi';
import toast from 'react-hot-toast';
// import { FaDownload } from 'react-icons/fa';


const DetailsPage = () => {



    const [formData, setFormData] = useState({
        name: '',
        submitted: false,

    });
    // console.log(formData);



   const handleSubmit = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  e.target.reset();

  setFormData({
    name,
    submitted: true,
  });

  toast.success('Successfully Submitted')
};




    let { skillId } = useParams();
    const { services, loading, errors } = useServices();


    const singleProducts = services?.find(element => element.skillId == skillId);

    if (loading) return <span className="text-yellow-500 loading loading-infinity loading-xl "></span>;

    const { skillName, providerName, price, rating, category, Reviews, views, location, image, description } = singleProducts;

    // console.log(singleProducts);


    console.log();


    return (
        <div>
            <div className='sm:my-[80px] my-[40px]'>
                <Container>


                    <div className='p-[10px]'>
                        <div className='sm:flex items-center content-center pb-[40px] border-b-[2px] border-[#00193130]'>
                            <div className='overflow-hidden h-[330px] sm:w-[330px] w-auto shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-[8px]'>
                                <img src={image} alt="" className='h-full w-full object-cover' />
                            </div>

                            <div className='flex-1  sm:ml-[40px] ml-0 sm:mt-[10px] mt-[10px]'>
                                <div className='space-y-[6px] pb-[20px] border-b-[2px] border-yellow-500 w-full'>
                                    <h2 className='font-bold text-[20px] sm:text-[32px] text-[#001931]'>{skillName}</h2>
                                    <h2 className='font-medium text-gray-500 text-[16px] sm:text-[18px]'>${price}.00 /hr</h2>
                                    <p className='font-inter text-[16px]'>
                                        Managed by <span className='font-semibold text-[16px] bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent'>{providerName}</span>
                                    </p>
                                </div>


                                <div className='pt-[20px]'>
                                    <div className='sm:flex flex sm:gap-[60px] justify-between sm:justify-normal'>
                                        <div>
                                            <h2 className='text-[30px] sm:text-[40px] text-yellow-600 pb-[3px]'><FaEye /></h2>
                                            <h2 className='text-[14px] sm:text-[16px] font-normal text-[#001931]'>Total Views</h2>
                                            <h2 className='font-extrabold text-[22px] sm:text-[32px] text-[#001931]'>{views}+</h2>
                                        </div>


                                        <div>
                                            <h2 className='text-[30px] sm:text-[40px] text-[#FF8811] pb-[3px]'><FaStar /></h2>
                                            <h2 className='text-[14px] sm:text-[16px]  font-normal text-[#001931]'>Avg. Ratings</h2>
                                            <h2 className='font-extrabold text-[22px] sm:text-[32px] text-[#001931]'>{rating}</h2>
                                        </div>
                                        <div>
                                            <h2 className='text-[30px] sm:text-[40px]  text-yellow-600 pb-[3px]'><BiSolidLike /></h2>
                                            <h2 className='text-[14px] sm:text-[16px]  font-normal text-[#001931]'>Total Reviews</h2>
                                            <h2 className='font-extrabold text-[22px] text-[#001931]'>{Reviews}</h2>
                                        </div>

                                    </div>



                                </div>

                                <div className='mt-[20px]'>
                                    {!formData.submitted ? (
                                        <a
                                            href="#service-form"
                                            className="btn btn-secondary text-[16px] sm:text-[20px] font-semibold py-[24px] px-[24px] border-0 outline-0 shadow-none bg-yellow-500 hover:bg-black"
                                        >
                                            Book Now
                                        </a>
                                    ) : (
                                        <button
                                            disabled
                                            className="btn btn-secondary text-[20px] font-semibold py-[24px] px-[24px] border-0 outline-0 shadow-none bg-gray-400 cursor-not-allowed"
                                        >
                                            Booked
                                        </button>
                                    )}
                                    {/* <ToastContainer /> */}
                                </div>

                            </div>
                        </div>



                        <div className='py-[40px]'>
                            <h2 className='text-[24px] font-semibold text-[##001931] mb-[20px]'>Description</h2>
                            <p className='text-[#627382]'>{description}</p>



                        </div>

                        <div>

                            <div id="service-form" className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
                                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                                    Service Booking Form
                                </h2>

                                <form onSubmit={handleSubmit}>
                                   
                                    <div className="mb-5">
                                        <label  className="block mb-2 text-sm font-medium text-gray-700">
                                            Product Name
                                        </label>
                                        <input
                                            type="text"
                                            id="productName"
                                            name="productName"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>

                                    <div className="mb-5">
                                        <label className="block mb-2 text-sm font-medium text-gray-700">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="productName"
                                            name="name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>


                                    <div className="mb-5">
                                        <label className="block mb-2 text-sm font-medium text-gray-700">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="productName"
                                            name="email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>

                                   
                                    <div className="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-700">
                                            Your Address
                                        </label>
                                        <input
                                            type="address"
                                            id="address"
                                            name="address"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full px-6 py-3 text-white bg-yellow-500 rounded-md font-semibold hover:bg-yellow-600"
                                        >
                                            Submit Info
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>




                    </div>
                </Container>

            </div>
        </div>
    );
};

export default DetailsPage;