import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../SharedPages/Loading';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from './../../Hooks/useToken';



const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    const [token] = useToken(user || user1);
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);


    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        if (token) {
            // console.log(user)
            navigate(from, { replace: true });
        }

    }, [token, navigate, from])

    if (loading || loading1) {
        return <Loading></Loading>
    }



    let errorMessage;
    if (error || error1) {
        errorMessage = <p className='text-error mb-2'>{error?.message}{error1?.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data)

    };
    //     const {watch} = useForm()
    // const password = watch('paswoordFieldName')
    // const resetPassword = async () => {

    //     if (email) {
    //         await sendPasswordResetEmail(email);
    //         toast('Message already send')
    //     }
    //     else {
    //         toast('Please enter your email')

    //     }


    // }




    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Login</h2>
                    <div className="form-control w-full max-w-xs">
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
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary w-36 capitalize">Forget Password</button>
                    <p className='text-sm text-center font-semibold'>New to Hospital Portal? <Link to='/signup' className='text-secondary'>Create New Account</Link></p>




                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}

                        className="btn btn-outline">Continue with google
                    </button>

                </div>
            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Login;