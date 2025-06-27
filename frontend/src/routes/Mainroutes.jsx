import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"));
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"));
const Personal = lazy(() => import("../pages/user/Personal"));
const UserProfile = lazy(() => import("../pages/user/UserProfile"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const UpdateUserProfile = lazy(() => import("../pages/user/UpdateUserProfile"));
const Cart = lazy(() => import("../pages/Cart"));


const Mainroutes = () => {

	const { users } = useSelector((state) => state.userReducer);
	// console.log(users);

	return <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/products" element={<Products />} />
		<Route path="/product/:id" element={<ProductDetails />} />


		<Route path="*" element={<PageNotFound />} />

		{users ? <>
			<Route path="/cart" element={<Cart />} />
		</> : <>
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />
		</>}


		<Route path="/user/profile" element={<UserProfile />}>
			{users ? <>
				<Route index element={<Personal />} />
				<Route path="update-profile" element={<UpdateUserProfile />} />
			</> : <>
			</>}

			{users && users.isAdmin ? <>
				<Route path="create-product" element={<CreateProduct />} />
			</> : <>
			</>}
		</Route>




	</Routes>
}

export default Mainroutes