import React from 'react';
import doctor from "../../assets/images/doctor.png";
import SharedButton from './../SharedPages/SharedButton';


const HomeAppointment = () => {
    return (
        <section className='flex items-center justify-center p-6 lg:p-0 bg-[url("/src/assets/images/appointment.png")] bg-cover my-28'>
            <div className='flex-1 hidden lg:block'>
                <img src={doctor} alt="doctor" className='mt-[-150px]' />
            </div>
            <div className='flex-1'>
                <h1 className='text-secondary font-bold'>Appointment</h1>
                <h1 className='my-3 text-white text-5xl'>Make an Appointment Today</h1>
                <p className='text-white mb-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <SharedButton>Get Started</SharedButton>
            </div>
        </section>
    );
};

export default HomeAppointment;