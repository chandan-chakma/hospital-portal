import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading';
import User from './User';

const AllUser = () => {


    const { data: users, isLoading, refetch } = useQuery('user', () =>
        fetch('http://localhost:5000/user', {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    );



    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>{users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users.map((user, index) => <User
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            >

                            </User>)
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllUser;