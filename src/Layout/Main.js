import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='px-[5rem]'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;