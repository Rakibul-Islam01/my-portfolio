import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import MyProjects from '../MyProjects/MyProjects';

const Home = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
            <Skills></Skills>
            <MyProjects></MyProjects>

        </div>
    );
};

export default Home;