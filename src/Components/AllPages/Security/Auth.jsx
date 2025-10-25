import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../Footer/Footer';
import NewHeader from './NewHeader';
import { Toaster } from 'react-hot-toast';


const Auth = () => {


    return (
        <div>



           <NewHeader></NewHeader>

           <main className='min-h-screen'>

       <Outlet></Outlet>
        <Toaster />
           </main>
            
     
            <Footer></Footer>
            
        </div>
    );
};

export default Auth;