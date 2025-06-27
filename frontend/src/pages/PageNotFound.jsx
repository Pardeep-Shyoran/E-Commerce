const PageNotFound = () => {
    return (
        <div className="min-h-[90vh] flex justify-center items-center bg-[#1E1E1E] relative overflow-hidden">

            {/* Blobs */}
            <div className="absolute w-[500px] h-[500px] bg-[#4DA6FF] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob top-[-10%] left-[-10%]" />
            <div className="absolute w-[400px] h-[400px] bg-[#7C3AED] rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-2000 top-[20%] right-[-10%]" />
            <div className="absolute w-[450px] h-[450px] bg-[#22D3EE] rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-4000 bottom-[-10%] left-[20%]" />
            <h1 className="text-5xl absolute font-black bottom-[10%]"> Page Not Found</h1>
            <img className="object-cover w-full h-[90vh]" src="https://miro.medium.com/v2/resize:fit:1400/0*VMeYq1x7s1ObI0Sq.gif" alt="" />
        </div>
    )
}

export default PageNotFound