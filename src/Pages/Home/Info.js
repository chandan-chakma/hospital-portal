import React from 'react';
import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";


const Info = () => {
    return (
        <div className='grid grid-cols lg:grid-cols-3 gap-4'>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
                <figure>
                    <img className="pl-3" src={clock} alt="Album" />
                </figure>
                <div className="card-body text-white ">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>

            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-accent">
                <figure>
                    <img className="pl-3" src={clock} alt="Album" />
                </figure>
                <div className="card-body text-white ">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
                <figure>
                    <img className="pl-3" src={clock} alt="Album" />
                </figure>
                <div className="card-body text-white ">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>




        </div>
    );
};

export default Info;