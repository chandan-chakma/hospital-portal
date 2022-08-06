import React from 'react';


const Reviews = ({ review }) => {

    return (
        <div className="card w-72 lg:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='mb-4'>{review.review}</p>
                <div className="flex items-center ">
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-4">
                            <img src={review.img} alt="review" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>{review.name}</h1>
                        <h4>{review.country}</h4>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reviews;