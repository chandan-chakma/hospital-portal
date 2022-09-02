import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51Lc1FZHWZC0QGlaAZ117CeF6SEjuqD173DSIwlFFAeZFpqAigzb8R7z6hk4jSvWyt8qpRFFPuRMe68wadjryaHZD005aSFhsvv');

const Payment = () => {
    const { id } = useParams();
    const url = `https://pacific-tor-30421.herokuapp.com/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3>Please pay for</h3>
            <h3>this for payment {id}</h3>


            <div class="card w-96 bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title">{appointment.treatment}</h2>
                    <p>We will see onn {appointment.date} at {appointment.slot}</p>
                    <p>Please pay ${appointment.price}</p>

                </div>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;