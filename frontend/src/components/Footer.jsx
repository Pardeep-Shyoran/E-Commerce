import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"

const Footer = () => {

  const user = useSelector((state) => state.userReducer.users);

  return (
    <div className="w-full h-[90vh] px-[10%] flex flex-col items-center">
    <div className="w-full h-[70vh] flex justify-center gap-12 pt-25">

      <div className="w-[25%] flex items-center flex-col gap-12">
        <h2 className="text-2xl font-black">SwiftCart</h2>
        <div className="flex items-center flex-col gap-8">
            <NavLink target="_blank" className="flex items-center gap-2 hover:text-slate-100" to="https://github.com/Pardeep-Shyoran/E-Commerce">
            <i className="text-3xl ri-github-line"></i>
            View Repo
            <i className="ri-external-link-line"></i>
          </NavLink>
        </div>
      </div>

      <div className="w-[25%] flex items-center flex-col gap-12">
        <h2 className="text-2xl font-black">Quick Links</h2>
        <div className="flex items-center flex-col gap-4">
          <NavLink className="text-xl hover:text-slate-100" to="/">Home</NavLink>
          <NavLink className="text-xl hover:text-slate-100" to="/products">Products</NavLink>
          {user ? <>
            <NavLink className="text-xl hover:text-slate-100" to="/cart">Cart</NavLink>
            <NavLink className="text-xl hover:text-slate-100" to="/user/profile">Profile</NavLink>
          </> : <>
              <NavLink className="text-xl hover:text-slate-100" to="/login">Login</NavLink>
          </>}
        </div>
      </div>

      <div className="w-[25%] flex items-center flex-col gap-12">
        <h2 className="text-2xl font-black">Social Media</h2>
        <div className="flex items-start flex-col gap-4">
            <NavLink target="_blank" className="flex gap-5 items-center hover:text-slate-100" to="https://github.com/Pardeep-Shyoran">
            <i className="text-3xl ri-github-line "></i>
            <h2 className="text-xl ">Github</h2>
          </NavLink>
            <NavLink target="_blank" className="flex gap-5 items-center hover:text-slate-100" to="www.linkedin.com/in/pardeepshyoran">
            <i className="text-3xl ri-linkedin-fill "></i>
            <h2 className="text-xl ">Linkedin</h2>
          </NavLink>
            <NavLink target="_blank" className="flex gap-5 items-center hover:text-slate-100" to="https://www.instagram.com/par_deep_shyoran">
            <i className="text-3xl ri-instagram-line "></i>
            <h2 className="text-xl ">Instagram</h2>
          </NavLink>
            <NavLink target="_blank" className="flex gap-5 items-center hover:text-slate-100" to="https://discord.com/users/pardeep_shyoran">
            <i className="text-3xl ri-discord-line "></i>
            <h2 className="text-xl ">Discord</h2>
          </NavLink>
            <NavLink target="_blank" className="flex gap-5 items-center hover:text-slate-100" to="https://x.com/PardeepShyoran">
            <i className="text-3xl ri-twitter-x-line "></i>
            <h2 className="text-xl ">X</h2>
          </NavLink>
        </div>
      </div>
    </div>
      <div className="flex items-center flex-col w-full h-[8vh]">
        <p className="font-black">&copy; {new Date().getFullYear()} All rights are reserved - SwiftCart.</p>
        <p className="text-sm">Credits - Pardeep Shyoran.</p>
      </div>
    </div>
  )
}

export default Footer