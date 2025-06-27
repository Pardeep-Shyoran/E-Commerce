import { NavLink } from "react-router-dom"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="min-h-[90vh] w-full bg-[#1E1E1E] relative overflow-hidden ">

      <div className="image bg-[url('https://images.unsplash.com/photo-1626941887126-c60e86b53fc2?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat w-full min-h-[90vh] object-center">
        <div className="w-full h-[90vh] bg-[#1e1e1ecc] relative">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <h1 className="text-4xl pb-9">"Click, Shop, Smile"</h1>

            <NavLink className="text-3xl border-b-2 bg-[#1e1e1e] rounded-2xl px-5 py-3 mx-2 font-black cursor-pointer" to="/products">
              Explore Products
            </NavLink>
          </div>
        </div>
      </div>

      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h2 className="text-6xl font-black border-b-12 mb-12">Categories</h2>
        <div className="flex px-[10%] gap-24">
          <div className="flex items-center flex-col ">
            <img className="rounded-tl-4xl rounded-br-4xl rounded-bl-[4vw]" src="https://images.unsplash.com/photo-1593032470861-4509830938cb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="pt-5 text-2xl font-black">Fashion</div>
          </div >
          <div className="flex items-center flex-col ">
            <img className="rounded-tl-4xl rounded-br-4xl rounded-bl-[4vw]" src="https://images.unsplash.com/photo-1689872072441-5aed6df99448?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="pt-5 text-2xl font-black">Electronics</div>
          </div>
          <div className="flex items-center flex-col ">
            <img className="rounded-tl-4xl rounded-br-4xl rounded-bl-[4vw]" src="https://images.unsplash.com/photo-1619295958612-8ff47fb3bfa3?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="pt-5 text-2xl font-black">Furniture</div>
          </div>
        </div>
      </div>


      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h2 className="text-6xl font-black border-b-12 mb-12">Trending Products</h2>
        <div className="flex px-[10%] gap-24">
          <NavLink to="/product/3" className="flex items-center flex-col ">
            <img className="rounded-tl-4xl rounded-br-4xl rounded-bl-[4vw]" src="https://i.pinimg.com/736x/4a/1f/4c/4a1f4c0eaaec4374a197df0dd6c0a984.jpg" alt="" />
            <div className="pt-5 text-2xl font-black">Jacket</div>
          </NavLink >
          <NavLink to="/product/14" className="flex items-center flex-col ">
            <img className="rounded-tl-4xl rounded-br-4xl rounded-bl-[4vw]" src="https://i.pinimg.com/736x/4e/70/9a/4e709a547a43dc4fa3e83b3ee83316d9.jpg" alt="" />
            <div className="pt-5 text-2xl font-black">Monitor</div>
          </NavLink>
          <NavLink to="/product/9" className="flex items-center flex-col ">
            <img className="rounded-tl-4xl rounded-br-4xl rounded-bl-[4vw]" src="https://i.pinimg.com/736x/46/a7/15/46a715c17962851b0d209a88e22dff04.jpg" alt="" />
            <div className="pt-5 text-2xl font-black">Samsung SSD</div>
          </NavLink>
        </div>
      </div>

      <Footer />



    </div>
  )
}

export default Home