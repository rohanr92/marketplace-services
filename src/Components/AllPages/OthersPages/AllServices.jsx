import React, { useEffect, useState } from 'react';
import Container from '../../Container/Container';
import useServices from '../../Hook/useServices';
import ServicesMap from './ServicesMap';
import Aos from "aos";
import "aos/dist/aos.css";

const AllServices = () => {

          
useEffect(() => {
  Aos.init({
    duration: 1200,
    once: false, 
  });
}, []);

useEffect(() => {
  const handleScroll = () => {
    Aos.refresh(); 
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);



        const { services, loading, errors } = useServices();
        let [final, setFinal] = useState([]);

        const [searches, setSearches] = useState("")

        if(loading) {
return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="loading loading-dots loading-lg text-yellow-500"></span>
    </div>
  );
        }

        // writing the search functions

        const handleSearch = (e) => {

            let value = e.target.value;

            setSearches(value);
            

            const dataFilter = value.toLowerCase().split(' ').join('');
            const filteredServices = services.filter(product => {
            const serviceFilter = product.skillName.toLowerCase().split(' ').join('');
            return serviceFilter.includes(dataFilter)
            })
            setFinal(filteredServices)
        }

        // console.log(final);


        const displayedServices = searches.trim() !== '' ? final : services;





    return (
        <div>

                        <section className="bg-[#f7f7f7] relative pt-[40px] pb-[30px] px-4 sm:px-6 lg:px-8 font-inter min-h-screen">
                            <Container>
      <div className="max-w-7xl mx-auto">
        

        <div className="text-center" data-aos="fade-up" data-aos-once="false">
          <h2 className="mt-6 text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
            All Of Our Services
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Discover most-recent popular skill, that will help your business to lif up very quickly. FInd your perfect soft skill partner.
          </p>
        </div>  
        </div>

        <div className='flex justify-between pt-[40px]'>
            <div></div>
            <div>
                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" name='search' value={searches} onChange={handleSearch} placeholder="Search" />
</label>
            </div>

        </div>



{
    displayedServices?.length === 0 ? <h2 className='text-center p-[40px] text-[25px] font-medium'>No products found</h2> :   <div className='grid sm:grid-cols-3 gap-[20px] py-[20px]'>
            {
                displayedServices?.map(services => <ServicesMap key={services.skillId} services={services}></ServicesMap>)
            }
        </div>
}



        </Container>
         </section>
        
        </div>
    );
};

export default AllServices;