import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncUpdateUser } from "../../store/actions/userActions";
import { toast } from "react-toastify";

const UpdateUserProfile = () => {
    const { users } = useSelector((state) => state.userReducer);

    // console.log(users);

    const { register, reset, handleSubmit } = useForm({
        defaultValues: {
            image: users?.image,
            username: users?.username,
            email: users?.email,
            password: users?.password,
        },
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const UpdateUserHandler = (user) => {
        // console.log(user);
        dispatch(asyncUpdateUser(users.id, user));
        
        toast.success("Profile Updated");
        navigate("/user/profile");
    };

    
    return users ? (
        <div className="min-h-[90vh] flex justify-center items-center bg-[#1E1E1E]">
            
            <div className="relative z-10 flex justify-center items-center flex-col">
                <form
                    onSubmit={handleSubmit(UpdateUserHandler)}
                    className="mx-[10%] my-16 flex flex-col justify-center items-center w-full px-12 py-16 rounded-tl-4xl rounded-br-4xl rounded-bl-[6vw] bg-white/10 text-white z-10"
                >
                    <input
                        {...register("image")}
                        className="outline-0 border-b p-2 mb-3 text-2xl bg-transparent h-12 w-[30vw]"
                        type="url"
                        placeholder="Image URL"
                    />
                    <input
                        {...register("username")}
                        className="outline-0 border-b p-2 mb-3 h-12 w-[30vw] text-3xl bg-transparent"
                        type="text"
                        placeholder="john-doe"
                    />
                    <input
                        {...register("email")}
                        className="outline-0 border-b p-2 mb-3 h-12 w-[30vw] text-3xl bg-transparent"
                        type="email"
                        placeholder="john@doe.com"
                    />
                    <input
                        {...register("password")}
                        className="outline-0 border-b p-2 mb-3 h-12 w-[30vw] text-3xl bg-transparent"
                        type="password"
                        placeholder="********"
                    />
                    <div className="flex justify-around items-center gap-12 w-[30vw] mt-8">
                        <button className="mt-6 bg-[#4DA6FF] cursor-pointer p-2 h-12 px-8 rounded text-[#1E1E1E] ">
                            Update Profile
                        </button>
                        
                    </div>
                </form>

            </div>
        </div>
    ) : (
        "Loading..."
    );
};

export default UpdateUserProfile;
