import React from 'react';
import chair from "../../assets/images/chair.png";
import SharedButton from '../SharedPages/SharedButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <SharedButton>Get Started</SharedButton>

                </div>
            </div>
        </div>
    );
};

export default Banner;