import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading';
import Doctor from './Doctor';

const ManageDoctor = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () =>
        fetch('https://pacific-tor-30421.herokuapp.com/doctor', {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h4>Manage Doctor {doctors.length}</h4>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <Doctor
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                            >

                            </Doctor>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;