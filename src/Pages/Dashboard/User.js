import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index, refetch }) => {
    const { email, role } = user;
    const MakeAdmin = () => {
        fetch(`https://pacific-tor-30421.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`)

                }


                console.log(data)
            })
    }
    return (
        <tr>
            <td>{index + 1}</td>

            <td>{user.email}</td>
            <td>{role !== 'admin' && <button onClick={MakeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-xs">Remove User</button></td>

            {/* <td>{user.treatment}</td>
        <td>{user.slot}</td>
        <td>{user.date}</td> */}
        </tr>
    );
};

export default User;