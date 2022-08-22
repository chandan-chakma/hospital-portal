import React from 'react';
import { Outlet, Link } from "react-router-dom";
import useAdmin from './../../Hooks/UseAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <h2 className='text-4xl m-2'>welcome to dashboard</h2> */}
                {/* <!-- Page content here --> */}
                <Outlet />
                {/* <label htmlFor="dashboard-sidebar" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointment</Link></li>
                    <li><Link to='/dashboard/myreview'>My Review</Link></li>
                    {admin && <><li><Link to='/dashboard/alluser'>All User</Link></li>
                        <li><Link to='/dashboard/adddoctor'>Add Doctor</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;