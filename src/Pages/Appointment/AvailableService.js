import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import BookingService from './BookingService';

const AvailableService = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("service.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='text-center my-28'>
            <h1 className='text-secondary text-xl '>Available Services on {format(date, 'PPP')}</h1>
            <h4 className='font-light mb-5'>Please select a service.</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12' >
                {
                    services.map(service => <BookingService
                        key={service._id}
                        service={service}
                    >

                    </BookingService>)

                }
            </div>

        </div>
    );
};

export default AvailableService;