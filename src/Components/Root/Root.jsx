import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import NewHeader from '../AllPages/Security/NewHeader';
import { Toaster } from 'react-hot-toast';


const Root = () => {


    const location = useLocation();
  const { pathname } = location;

  const isHomePage = pathname === "/";


    return (
        <div>

            


            {
                isHomePage ? (<Navbar></Navbar>) : (<NewHeader></NewHeader>)
            }
            <section className='min-h-screen'>
                <Outlet></Outlet>
                <Toaster position="top-right" />
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Root;