import React from 'react';
import SharedButton from './../SharedPages/SharedButton';

const BookingService = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body mx-auto">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length > 0 ?

                        <span className='font-bold'>{slots[0]}</span> : <span className='font-bold text-error'>Not Available</span>
                }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center mt-6">
                    <button disabled={slots.length === 0} class="btn btn-secondary bg-gradient-to-r from-secondary to-primary text-uppercase">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default BookingService;