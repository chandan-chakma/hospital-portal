import React from 'react';
import { toast } from 'react-toastify';

const Doctor = ({ doctor, index, refetch }) => {
    const { name, specialty, img, email } = doctor;
    const handleDelete = () => {
        fetch(`https://pacific-tor-30421.herokuapp.com/doctor/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            },


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast(`Doctor: ${name} is deleted`);
                    refetch();

                }
            })


    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td> <button onClick={() => handleDelete(email)} class="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default Doctor;