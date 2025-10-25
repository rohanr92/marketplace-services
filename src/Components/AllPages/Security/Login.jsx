import React, { use, useState } from 'react';
import Container from '../../Container/Container';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaUser, FaLock } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {

  const { user, setUser, login, loading } = use(AuthContext);
   const [error, setError] = useState("");

  let location = useLocation();
  let navigate = useNavigate();

  if(loading) {
   return <div className="min-h-screen flex justify-center items-center">
    <span className="loading loading-infinity loading-xl text-yellow-500"></span>
  </div>
  }

const handleSubmit = (event) => {
    event.preventDefault(); 
    const email = event.target.email.value;
    const password = event.target.password.value;

    login(email, password)
    .then((userCredential) => {

      const users = userCredential.user;
      setUser(users);
      event.target.reset();
      toast.success('Logged In Successfully');
      navigate(location?.state || '/');
    })
    .catch((error) => {
      toast.error('Logged In Successfully');
      setError("Invalid Email Or Password")
    })
  };

    return (
        <div className='bg-gray-100'>
            
 <Container>

                <div className="flex items-center justify-center min-h-screen ">
                   
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Login
        </h1>

       
        <form className="space-y-6" onSubmit={handleSubmit}>
          
         
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

          
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="w-5 h-5 text-gray-400" />
              </span>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full py-3 pl-10 pr-4 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-gray-900">
                Remember me
              </label>
            </div>

            <Link to='/auth/forgot' className="font-medium text-yellow-500 hover:text-yellow-600">
              Forgot your password?
            </Link>
          </div>


      
          {error && (
            <p className="text-sm text-red-600 text-left">
              {error}
            </p>
          )}

         
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 text-lg font-semibold text-white bg-yellow-500 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
            >
              Log In
            </button>
          </div>
        </form>

        
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/auth/register" className="font-medium text-yellow-500 hover:text-yellow-600">
            Sign up
          </Link>
        </p>
      </div>
      
    </div>

    </Container>



            
            
        </div>
    );
};

export default Login;