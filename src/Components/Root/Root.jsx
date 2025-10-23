import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import NewHeader from '../AllPages/Security/NewHeader';
import AnimatedCursor from "react-animated-cursor"

const Root = () => {


    const location = useLocation();
  const { pathname } = location;

  const isHomePage = pathname === "/";


    return (
        <div>

           <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  outerStyle={{
    border: '3px solid var(--cursor-color)'
  }}
  innerStyle={{
    backgroundColor: 'var(--cursor-color)'
  }}
/>
            {
                isHomePage ? (<Navbar></Navbar>) : (<NewHeader></NewHeader>)
            }
            <section className='min-h-screen'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Root;