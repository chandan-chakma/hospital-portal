import React from 'react';
import fluoride from "../../assets/images/fluoride.png";
import cavity from '../../assets/images/cavity.png';
import teeth from "../../assets/images/whitening.png"
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity

        },
        {
            _id: 3,
            name: "Teeth  Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: teeth
        }
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-secondary font-bold'>Our Services</h3>
                <h1 className='text-2xl font-semibold'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12 px-12'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    >

                    </Service>)
                }
            </div>

        </div>
    );
};

export default Services;