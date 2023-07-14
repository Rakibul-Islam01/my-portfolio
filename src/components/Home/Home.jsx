import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>

        </div>
    );
};

export default Home;