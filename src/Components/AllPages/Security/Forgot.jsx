import React, { use, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthContext';

const Forgot = () => {

    const { user, loading, forgotPass } = use(AuthContext);
    const [message, setMessage] = useState('');


  if(loading) {
   return <div className="min-h-screen flex justify-center items-center">
    <span className="loading loading-infinity loading-xl text-yellow-500"></span>
  </div>
  }
    const handleForgetSubmit = (e) => {

        e.preventDefault();

        const email = e.target.email.value;

        forgotPass(email)
        .then(() => {
            e.target.reset();
            setMessage('Check your email to reset your password.');
  })
  .catch((error) => {
    alert(error.message);
    
    // ..
  });

        
    }

    



    return (
        <div className='bg-gray-100 min-h-screen'>

            <div  className="flex items-center justify-center min-h-screen">

            
            <div className=' w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md'>


                <form className="space-y-6" onSubmit={handleForgetSubmit}>
                    <div className='text-center text-[30px] font-medium'>
                        <h2>Forget Password</h2>
                    </div>
                          
                         
                          <div>
                            <label 
                              htmlFor="email" 
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email Address
                            </label>
                            <div className="relative mt-1">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <FaUser className="w-5 h-5 text-gray-400" />
                              </span>
                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full py-3 pl-10 pr-4 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                                placeholder="you@example.com"
                              />
                            </div>
                          </div>

                             {message && (
            <p className="text-green-600 text-sm text-left font-medium">
              {message}
            </p>
          )}
                
                         
                          <div>
                            <button
                              type="submit"
                              className="w-full py-3 px-4 text-lg font-semibold text-white bg-yellow-500 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                

            </div>
            </div>
        </div>
    );
};

export default Forgot;