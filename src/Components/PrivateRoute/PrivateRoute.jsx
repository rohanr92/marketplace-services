import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const location = useLocation();
    console.log(location);
    

    const { user, loading } = use(AuthContext);


 if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-xl text-yellow-500"></span>
      </div>
    );
  }



    if(user) {
        return children;
    } 
return <Navigate  state={location.pathname} to='/auth/login'></Navigate>
    
    
};

export default PrivateRoute;