import { useDispatch, useSelector } from "react-redux";
import { asyncDeleteUser, asyncLogoutUser } from "../store/actions/userActions";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserProfileNav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { users } = useSelector((state) => state.userReducer);

    const LogoutProfileHandler = () => {
        dispatch(asyncLogoutUser(users.id));
        navigate("/login");
        toast.warn("Logged out!");
    };

    const DeleteProfileHandler = () => {
        dispatch(asyncDeleteUser(users.id));
        navigate("/login");
        toast.warn("Profile Deleted!");
    };

  return (
      <div className="flex flex-col gap-8 px-10 py-20 bg-white/10 rounded-tr-4xl rounded-bl-4xl rounded-br-[6vw]" >
          <NavLink to="/user/profile" end className={({isActive}) => ` text-2xl ${isActive ? "text-[#4DA6FF]" : ""}`} >Personal</NavLink>
          <NavLink to="update-profile" className={({isActive}) => ` text-2xl ${isActive ? "text-[#4DA6FF]" : ""}`} >Update Profile</NavLink>


          {users && users.isAdmin ? <>
              <NavLink className={({isActive}) => ` text-2xl ${isActive ? "text-[#4DA6FF]" : ""}`} to="create-product">Create Product</NavLink>
            </> : <>

            </>}

          <button
              type="button"
              onClick={LogoutProfileHandler}
              className=" bg-[#ff8080] cursor-pointer p-2 h-12 px-8 rounded text-[#1E1E1E] "
          >
              Logout
          </button>

          <button
              type="button"
              onClick={DeleteProfileHandler}
              className=" bg-[#ff4d4d] cursor-pointer p-2 h-12 px-8 rounded text-[#1E1E1E] "
          >
              Delete Profile
          </button>
    </div>
  )
}

export default UserProfileNav