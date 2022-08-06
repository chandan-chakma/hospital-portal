
import React from 'react';
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Reviews from './Reviews';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            country: "California"

        },
        {
            _id: 2,
            name: "Winson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            country: "California"

        },
        {
            _id: 3,
            name: "Winson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            country: "California"

        },
    ]
    return (
        <div className='my-28 px-12'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-secondary font-bold'>Testimonial</h2>
                    <h1 className='text-4xl font-semibold'>What Our Patient Says</h1>
                </div>
                <div>
                    <img src={quote} alt="" className='w-24 lg:w-48' />
                </div>
            </div>
            <div className='grid grid-cols lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                    >
                    </Reviews>)

                }
            </div>

        </div>
    );
};

export default Testimonial;