import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.userReducer.users);
    // console.log(user);


    return (
        <nav className="flex justify-between items-center gap-x-10 p-5 bg-transparent px-[5%]">
            <NavLink className="font-black" to="/">SwiftCart</NavLink>
            

            <div className="flex gap-12">
            <NavLink className={(e) => `  ${e.isActive ? "text-[#4DA6FF]" : ""}`} to="/">Home</NavLink>
            <NavLink className={(e) => `  ${e.isActive ? "text-[#4DA6FF]" : ""}`} to="/products">Products</NavLink>
            </div>

            <div className="flex gap-12">

            {user ? <>
                <NavLink className={(e) => `  ${e.isActive ? "text-[#4DA6FF]" : ""}`} to="/cart">Cart</NavLink>
                <NavLink className={(e) => `  ${e.isActive ? "text-[#4DA6FF]" : ""}`} to="/user/profile">Profile</NavLink>
            </> : <>
                <NavLink className={(e) => `  ${e.isActive ? "text-[#4DA6FF]" : ""}`} to="/login">Login</NavLink>
            </>}
            </div>


        </nav>
    );
};

export default Navbar;
