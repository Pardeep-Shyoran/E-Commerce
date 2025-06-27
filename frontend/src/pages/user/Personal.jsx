import { useSelector } from "react-redux";

const Personal = () => {
  const { users } = useSelector((state) => state.userReducer);
  // console.log(users);
  return (
    <div className="min-h-[90vh] flex justify-center items-center">

      <div className="flex justify-center gap-12 p-16 bg-white/10 rounded-tl-4xl rounded-br-4xl rounded-bl-[6vw]">
      <div>
        <h1 className="text-9xl">{users?.username}</h1>
        <h1 className="text-4xl pt-[4%] text-[#9b9b9b]">{users?.email}</h1>
      </div>
      <img className="h-[50vh] rounded-full aspect-square object-cover border-4 p-1" src={users?.image} alt="" />
    </div>
    </div>
  )
}

export default Personal;