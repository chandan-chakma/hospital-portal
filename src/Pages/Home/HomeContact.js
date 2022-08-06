import React from 'react';

const HomeContact = () => {
    return (
        <div className="text-center bg-[url('/src/assets/images/appointment.png')]  bg-cover mb-5 p-10">
            <h3 className="text-secondary font-bold">Contact Us</h3>
            <h1 className="text-2xl mb-3 text-white">Stay connected with us</h1>
            <form className="flex flex-col items-center">
                <input type="email" placeholder="Email Address" className="input w-full h-6 m-2 max-w-xs" />
                <input type="text" placeholder="Subject" className="input w-full h-6 mb-2 max-w-xs" />
                <textarea className="textarea w-80 h-6" placeholder="Your message"></textarea>
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary w-28 h-7 mt-4  text-white">Button</button>
            </form>

        </div>
    );
};

export default HomeContact;