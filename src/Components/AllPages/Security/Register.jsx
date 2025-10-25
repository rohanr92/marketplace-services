import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router'; 
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaImage } from 'react-icons/fa6';
import Container from '../../Container/Container';
import { AuthContext } from '../../Provider/AuthContext';



const RegisterPage = () => {

    const { user, setUser, createUser, googleLogin, loading, updatedProfile } = use(AuthContext);
    const [error, setError] = useState("");
    let navigate = useNavigate();






    if(loading) {
   return <div className="min-h-screen flex justify-center items-center">
    <span className="loading loading-infinity loading-xl text-yellow-500"></span>
  </div>
  }


  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    

    setError('');

    const name = event.target.name.value;
    const email = event.target.email.value;
    const imageUrl = event.target.imageUrl.value;
    const password = event.target.password.value;

    // PassWord


if (password.length < 6) {
    setError('Password must be at least 6 characters long.');
    alert('Password must be at least 6 characters long.');
    return;
  }

  if (!/[A-Z]/.test(password)) {
    setError('Password must contain at least one uppercase letter.');
    alert('Password must contain at least one uppercase letter.');
    return;
  }

  if (!/[a-z]/.test(password)) {
    setError('Password must contain at least one lowercase letter.');
    alert('Password must contain at least one lowercase letter.');
    return;
  }


    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        return updatedProfile(name, imageUrl);
      })
      .then(() => {
        event.target.reset();
        alert('Account Successfully Created');
        navigate('/');
      })
      .catch((error) => {
        setError(error.message);
        alert(error.message);
      });
  }
  

    const googleSignUp = () => {
    googleLogin()
    .then((result) => {
      setUser(result.user);
      navigate('/')
    })
    .catch((error) => {
      alert(error.message)
    })
  }


  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-[80px]">
        <Container>
        <div className='place-items-center'>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create an Account
        </h1>

       
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          
          <div>
            <label 
             
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="w-5 h-5 text-gray-400" />
              </span>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full py-3 pl-10 pr-4 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="John Doe"
              />
            </div>
          </div>

          
          <div>
            <label 
              
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaEnvelope className="w-5 h-5 text-gray-400" />
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
              
              className="block text-sm font-medium text-gray-700"
            >
              Profile Image URL (Optional)
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaImage className="w-5 h-5 text-gray-400" />
              </span>
              <input
                id="imageUrl"
                name="imageUrl"
                type="url"
                className="w-full py-3 pl-10 pr-4 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="https://example.com/image.png"
              />
            </div>
          </div>

        
          <div>
            <label 
              
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
                autoComplete="new-password"
                required
                className="w-full py-3 pl-10 pr-4 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="••••••••"
              />
            </div>
          </div>

      
          {error && (
            <p className="text-sm text-red-600 text-left">
              {error}
            </p>
          )}

          
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 text-lg font-semibold text-gray-900 bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
            >
              Sign Up with Email
            </button>
          </div>
        </form>

       
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-4 text-sm font-medium text-gray-500">
            OR
          </span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        
        <div>
          <button
          onClick={googleSignUp}
            type="button"
            className="w-full flex items-center justify-center py-3 px-4 text-lg font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            <FaGoogle className="w-5 h-5 mr-3 text-red-500" />
            Sign Up with Google
          </button>
        </div>

       
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
            Log in
          </Link>
        </p>
      </div>
      </div>
    </Container>
    </div>
  );
};

export default RegisterPage;


