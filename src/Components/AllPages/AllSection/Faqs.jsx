import React from 'react';
import Container from '../../Container/Container';
import { motion } from "framer-motion";
import { fadeIn } from '../../../variants';

const Faqs = () => {
  return (
    <div className='py-25'>


      <Container>

        <motion.div className="text-center mb-[40px]"
        
        variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}>
          <span className="bg-yellow-500 font-semibold text-sm px-4 py-2 rounded-full">
            General Questions
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Find answers to your questions instantly. Dive into our extensive documentation for all your queries.
          </p>
        </motion.div>




      </Container>
      <motion.div className='w-full px-[20px] sm:w-6/12 mx-auto'
      variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
      
      >

        <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-[10px]">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">How do I create an account?</div>
          <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300  mb-[10px]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
          <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-[10px]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">How do I update my profile information?</div>
          <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-[10px]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">How do I update my profile information?</div>
          <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-[10px]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">How do I update my profile information?</div>
          <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-[10px]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">How do I update my profile information?</div>
          <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-[10px]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">How do I update my profile information?</div>
          <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </div>

      </motion.div>

    </div>
  );
};

export default Faqs;