import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading';
import { toast } from 'react-toastify';


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery('/services',
        () =>
            fetch('https://pacific-tor-30421.herokuapp.com/service')
                .then(res => res.json())
    )


    const imageStorageKey = 'e08b5f98e9e8ce07354a6deda7a05916';

    const onSubmit = async data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: "POST",
            body: formData

        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img

                    }

                    console.log('imgbb', result);

                    fetch('https://pacific-tor-30421.herokuapp.com/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)


                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('doctor', data);
                            if (data.insertedId) {
                                toast.success('Doctor added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add doctor')
                            }
                        })
                }

            })



    };
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h3>Add a new doctor</h3>
            <form className=' ' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "name is required"
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt  text-error">{errors.name.message}</span>}
                    </label>

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "email is required"
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'provide a valid email'
                            }
                        })} />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt  text-error">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt  text-error">{errors.email.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} class="select input-bordered w-full max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}

                            >{service.name}</option>)

                        }


                    </select>
                    {/* <input type="text" placeholder="Your specialization" className="input input-bordered w-full max-w-xs"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "password is required"
                            },

                        })} /> */}
                    {/* <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt  text-error">{errors.password.message}</span>}
                    </label> */}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "image is required"
                            }
                        })} />
                    <label className="label">
                        {errors.file?.type === 'required' && <span className="label-text-alt  text-error">{errors.file.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;