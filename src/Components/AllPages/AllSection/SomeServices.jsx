import React from 'react';
import useServices from '../../Hook/useServices';
import Container from '../../Container/Container';
import InvidualServices from './InvidualServices';
import { motion } from "framer-motion";
import { fadeIn } from '../../../variants';


const SomeServices = () => {

  const { services, loading, errors } = useServices();

  const popularProducts = services?.slice(0, 6);




  return (
    <div>

      <section className="bg-[#f7f7f7] relative pt-[40px] pb-[30px] px-4 sm:px-6 lg:px-8 font-inter">
        <Container>
          <div className="max-w-7xl mx-auto">


            <motion.div

              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-center">
              <h2 className="mt-6 text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
                Find Most Popular Skills
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                Discover most-recent popular skill, that will help your business to lif up very quickly. FInd your perfect soft skill partner.
              </p>
            </motion.div>
          </div>
          <motion.div className='grid sm:grid-cols-3 gap-[20px] py-[40px]'

          
          >
            {
              popularProducts?.map(service => <InvidualServices key={service.skillId} service={service}></InvidualServices>)
            }
          </motion.div>



        </Container>
      </section>

    </div>

  );
};

export default SomeServices;