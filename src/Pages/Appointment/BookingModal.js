import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ date, booking, setBooking, refetch }) => {
    const { _id, name, slots } = booking;
    const [user, loading, error] = useAuthState(auth);
    const formatDate = format(date, 'PP');


    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        // console.log(slot, _id, name);
        const bookingTreatment = {
            treatmentId: _id,
            treatment: name,
            date: formatDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        // console.log(date);
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingTreatment)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success) {
                    toast(`Appointment is set , ${formatDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have an appointment on,  ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                setBooking(null);
            })



    }
    return (
        <div>
            <input type="checkbox" id="book-appointment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="book-appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-left mb-7">{name}</h3>

                    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4 justify-items-center">

                        <input type="text" placeholder="Type here" disabled value={format(date, 'PPP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {slots.map((slot, index) => <option
                                key={index}

                                value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className='btn btn secondary w-full max-w-xs' />
                    </form>

                </div>
            </div>

        </div >
    );
};

export default BookingModal;