import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Treatment from './Treatment';
import HomeAppointment from './HomeAppointment';
import Testimonial from './Testimonial';
import HomeContact from './HomeContact';
import Footer from '../SharedPages/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <HomeAppointment></HomeAppointment>
            <Testimonial></Testimonial>
            <HomeContact></HomeContact>
            <Footer></Footer>


        </div>
    );
};

export default Home;