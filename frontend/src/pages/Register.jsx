import { nanoid } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from '../store/actions/userActions';
import {toast} from "react-toastify";

const Register = () => {

    const { register, reset, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const registerHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        user.cart= [];
        console.log(user);
        dispatch(asyncRegisterUser(user));
        navigate("/login");
        toast.success("Your Profile created...");
    };

    return (
        <div className="min-h-[90vh] flex justify-center items-center bg-[#1E1E1E] relative overflow-hidden">

            {/* Blobs */}
            <div className="absolute w-[500px] h-[500px] bg-[#4DA6FF] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob top-[-10%] left-[-10%]" />
            <div className="absolute w-[400px] h-[400px] bg-[#7C3AED] rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-2000 top-[20%] right-[-10%]" />
            <div className="absolute w-[450px] h-[450px] bg-[#22D3EE] rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-4000 bottom-[-10%] left-[20%]" />

            {/* Form Container */}
            <div className="relative z-10 flex justify-center items-center">
                <form
                    onSubmit={handleSubmit(registerHandler)}
                    className="flex flex-col justify-center items-center px-12 py-16 rounded-tl-4xl rounded-br-4xl rounded-bl-[6vw] bg-white/10 text-white backdrop-blur-md z-10"
                >

                    <input
                        {...register("image")}
                        className="outline-0 border-b p-2 mb-3 text-4xl bg-transparent"
                        type="url"
                        placeholder="Image URL"
                    />
                    <input
                        {...register("username")}
                        className="outline-0 border-b p-2 mb-3 text-4xl bg-transparent"
                        type="text"
                        placeholder="john-doe"
                    />
                    <input
                        {...register("email")}
                        className="outline-0 border-b p-2 mb-3 text-4xl bg-transparent"
                        type="email"
                        placeholder="john@doe.com"
                    />
                    <input
                        {...register("password")}
                        className="outline-0 border-b p-2 mb-3 text-4xl bg-transparent"
                        type="password"
                        placeholder="********"
                    />
                    <button className="mt-6 bg-[#4DA6FF] cursor-pointer p-2 rounded w-[50%] text-[#1E1E1E]">
                        Register
                    </button>
                    <p className="mt-3">
                        Already have an account?
                        <Link className="text-[#4DA6FF]" to="/login"> Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register