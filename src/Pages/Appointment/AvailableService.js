import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import BookingService from './BookingService';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading';


const AvailableService = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [booking, setBooking] = useState(null);


    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())

    )
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate])

    return (
        <div className='text-center my-28'>
            <h1 className='text-secondary text-xl '>Available Services on {format(date, 'PP')}</h1>
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
                refetch={refetch}
            ></BookingModal>}

        </div>
    );
};

export default AvailableService;