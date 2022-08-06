import React, { useState } from 'react';
import Footer from '../SharedPages/Footer';

import AppointmentBanner from './AppointmentBanner';
import AvailableService from './AvailableService';


const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableService date={date} setDate={setDate}></AvailableService>
            <Footer></Footer>

        </div>
    );
};

export default Appointment;