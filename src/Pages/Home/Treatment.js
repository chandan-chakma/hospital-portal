import React from 'react';
import treatment from "../../assets/images/treatment.png";
import SharedButton from './../SharedPages/SharedButton';


const Treatment = () => {
    return (
        <div className="hero lg:min-h-screen px-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="lg:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <SharedButton>Get Started</SharedButton>
                </div>
            </div>
        </div>
    );
};

export default Treatment;