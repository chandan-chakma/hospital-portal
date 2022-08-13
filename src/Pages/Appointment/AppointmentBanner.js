import React from 'react';
import chair from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero lg:min-h-screen lg:bg-[url('/src/assets/images/bg.png')] bg-cover ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="chair" className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker className='mt-4 lg:mr-28'
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    ></DayPicker>

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;