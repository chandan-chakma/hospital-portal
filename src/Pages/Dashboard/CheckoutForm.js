import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';


const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('')

    const [clientSecret, setClientSecret] = useState('');
    const { _id, price, patient, patientName } = appointment;

    useEffect(() => {
        fetch('https://pacific-tor-30421.herokuapp.com/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)

                }

            })
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        // if (error) {
        //     setCardError(error?.message);
        //     // console.log(error)
        // }
        // else {
        //     setCardError('')

        // }

        setCardError(error?.message || '');
        setSuccess('');

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError?.message);

        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent);
            setSuccess('congrats! ,your payment is complete')
            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id,
            }

            fetch(`https://pacific-tor-30421.herokuapp.com/booking/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-error'>{cardError}</p>}
            {success &&
                <div className='text-primary'>
                    <p >{success}</p>
                    <p>your transaction id: {transactionId}</p>
                </div>

            }
        </div>
    );
};

export default CheckoutForm;