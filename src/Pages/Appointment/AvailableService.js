import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import BookingService from './BookingService';
import BookingModal from './BookingModal';

const AvailableService = ({ date }) => {
    const [services, setServices] = useState([]);
    const [booking, setBooking] = useState(null)

    useEffect(() => {

        fetch("http://localhost:5000/service")
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
                        setBooking={setBooking}

                    >

                    </BookingService>)

                }
            </div>
            {booking && <BookingModal
                date={date}
                booking={booking}
                setBooking={setBooking}
            ></BookingModal>}

        </div>
    );
};

export default AvailableService;