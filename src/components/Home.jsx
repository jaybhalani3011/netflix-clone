import React from 'react';
import '../css/homescreen.css';
import Banner from './Banner';
import NavforHome from './NavforHome';

function Home() {
    return (
        <div className='homescreen'>
            <NavforHome/>
            <Banner/> 
           
        </div>
    );
}

export default Home;
