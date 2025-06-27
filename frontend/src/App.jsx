import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { asyncCurrentUser, asyncLoginUser } from "./store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadProducts } from "./store/actions/productActions";

const App = () => {

  const dispatch = useDispatch();
  const {users} = useSelector((state) => state.userReducer);
  const {products} = useSelector((state) => state.productReducer);

  // useEffect(() => {
  //   dispatch(asyncLoadProducts());
  //   dispatch(asyncCurrentUser());
  //   dispatch(asyncLoginUser());
  // }, [])

  useEffect(() => {
    !users && dispatch(asyncCurrentUser());
  }, [users]);

  useEffect(() => {
    products.length == 0 && dispatch(asyncLoadProducts());
  }, [products]);



  return (

    
    <div className="min-h-screen w-full bg-[#1E1E1E] text-[#CCCCCC]">

      <Navbar />

      <Mainroutes />

      
    </div>
  )
}

export default App