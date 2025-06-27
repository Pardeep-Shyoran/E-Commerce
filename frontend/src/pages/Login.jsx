import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncLoginUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
    const { register, reset, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = (user) => {
        dispatch(asyncLoginUser(user));
        // console.log(user);
        navigate("/products");

        toast.success("Logged in!");
    };

    return (
        <div className="min-h-[90vh] flex justify-center items-center bg-[#1E1E1E] relative overflow-hidden">

            {/* Blobs */}
            <div className="absolute w-[500px] h-[500px] bg-[#4DA6FF] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob top-[-10%] left-[-10%] " />
            <div className="absolute w-[400px] h-[400px] bg-[#7C3AED] rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-2000 top-[20%] right-[-10%]" />
            <div className="absolute w-[450px] h-[450px] bg-[#22D3EE] rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-4000 bottom-[-10%] left-[20%]" />

            <form
                onSubmit={handleSubmit(loginHandler)}
                className="flex flex-col justify-center items-center px-12 py-24 rounded-tl-4xl rounded-br-4xl rounded-bl-[6vw] bg-white/10 text-white z-10"
            >
                
                <input
                    {...register("email")}
                    className="outline-0 border-b p-2 mb-3 text-4xl"
                    type="email"
                    placeholder="john@doe.com"
                />
                <input
                    {...register("password")}
                    className="outline-0 border-b p-2 mb-3 text-4xl"
                    type="password"
                    placeholder="********"
                />
                <button className='mt-23 bg-[#4DA6FF] cursor-pointer p-2 rounded w-[50%] text-[#1E1E1E]'>Login</button>
                <p className='mt-3'>Don't have an account?<Link className="text-[#4DA6FF]" to="/register">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;
