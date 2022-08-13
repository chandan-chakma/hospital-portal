import React from 'react';

const Footer = () => {
    return (
        <footer className=" p-10 lg:bg-[url('/src/assets/images/footer.png')] bg-cover bg-center mt-12">
            <div className="footer justify-around">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover font-semibold">Branding</a>
                    <a className="link link-hover font-semibold">Design</a>
                    <a className="link link-hover font-semibold">Marketing</a>
                    <a className="link link-hover font-semibold">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover font-semibold">Contact</a>
                    <a className="link link-hover font-semibold">Jobs</a>
                    <a className="link link-hover font-semibold">Press kit</a>
                    <a className="link link-hover font-semibold">About us</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover font-semibold">Terms of use</a>
                    <a className="link link-hover font-semibold">Privacy policy</a>
                    <a className="link link-hover font-semibold">Cookie policy</a>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-sm font-semibold">Copyright © 2022 - All right reserved</p>
            </div>


        </footer>

    );
};

export default Footer;