import { Outlet } from "react-router-dom"
import UserProfileNav from "../../components/UserProfileNav"

const UserProfile = () => {

    

    return (

        <div className="min-h-[90vh] flex justify-center  relative overflow-hidden">

             <div className="absolute w-[500px] h-[500px] bg-[#4DA6FF] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob top-[-10%] left-[-10%] " />
            <div className="absolute w-[400px] h-[400px] bg-[#7C3AED] rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-2000 top-[20%] right-[-10%]" />
            <div className="absolute w-[450px] h-[450px] bg-[#22D3EE] rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-4000 bottom-[-10%] left-[20%]" />

            <div className="w-[20%] flex justify-center items-center z-10">
                <UserProfileNav />
            </div>
            <div className="w-[80%]">
                <Outlet />
            </div>
        </div>
    )
}

export default UserProfile