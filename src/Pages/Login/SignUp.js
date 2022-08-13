import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../SharedPages/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [updateProfile, updating, error2] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    if (loading || loading1 || updating) {
        return <Loading></Loading>
    }

    let errorMessage;
    if (error || error1 || error2) {
        errorMessage = <p className='text-error mb-2'>{error?.message}{error1?.message}{error2?.message}</p>
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        alert('Updated profile');
        navigate("/appointment");
        console.log(data)

    };
    if (user || user1) {
        console.log(user, user1)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">SignUP</h2>
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
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 character or longer'
                                }
                            })} />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt  text-error">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt  text-error">{errors.password.message}</span>}
                        </label>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errorMessage}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="SignUp" />
                    </form>
                    <p className='text-sm text-center font-semibold'>Already Have an Account? <Link to='/login' className='text-secondary'>Please Login</Link></p>




                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}

                        className="btn btn-outline">Continue with google
                    </button>

                </div>
            </div>

        </div>
    );
};

export default SignUp;