import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../Footer/Footer';
import NewHeader from './NewHeader';


const Auth = () => {


    return (
        <div>



           <NewHeader></NewHeader>

           <main className='min-h-screen'>

       <Outlet></Outlet>
           </main>
            
     
            <Footer></Footer>
            
        </div>
    );
};

export default Auth;