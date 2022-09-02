import React from 'react';

const BookingService = ({ service, setBooking }) => {
    const { name, slots, price } = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body mx-auto">
                <h2 className="font-bold text-2xl text-secondary">{name}</h2>
                <p>{
                    slots.length > 0 ?

                        <span className='font-bold'>{slots[0]}</span> : <span className='font-bold text-error'>Not Available</span>
                }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>

                <p>{price ? <small> Price:{price}</small> : 'none'}</p>
                <div className="card-actions justify-center mt-6">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="book-appointment-modal"
                        className="btn btn-secondary bg-gradient-to-r from-secondary to-primary text-uppercase"
                        onClick={() => setBooking(service)}
                    >Book Appointment</label>

                    {/* <button disabled={slots.length === 0} className="btn btn-secondary bg-gradient-to-r from-secondary to-primary text-uppercase">Book Appointment</button> */}
                </div>
            </div>
        </div>
    );
};

export default BookingService;