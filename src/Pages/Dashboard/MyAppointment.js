import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://pacific-tor-30421.herokuapp.com/booking?patient=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/');

                    }
                    return res.json()

                })
                .then(data => {

                    setAppointments(data);
                });

        }


    }, [user])

    return (
        <div>
            <h2 className='text-4xl font-bold m-5'>My Appointments</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            appointments.map((appointment, index) => <tr
                                key={index}
                            >
                                <th>{index + 1}</th>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.treatment}</td>
                                <td>{appointment.slot}</td>
                                <td>{appointment.date}</td>
                                <td>
                                    {(appointment.price && !appointment.paid) && <Link to={`/dashboard/payment/${appointment._id}`}><button>pay</button></Link>}
                                    {(appointment.price && appointment.paid) && <Link to={` `}><button>paid</button></Link>}




                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default MyAppointment;