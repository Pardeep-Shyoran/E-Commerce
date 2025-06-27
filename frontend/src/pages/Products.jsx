import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userActions";
import { Suspense, useEffect, useState } from "react";
import axios from "../api/axiosconfig";
import InfiniteScroll from "react-infinite-scroll-component";

const Products = () => {
	const dispatch = useDispatch();

	const users = useSelector((state) => state.userReducer.users);
	// const products = useSelector((state) => state.productReducer.products);

	const [products, setProducts] = useState([]);
	const [hasMore, setHasMore] = useState(true);

	const fetchProducts = async () => {
		try {
			const { data } = await axios.get(
				`/products?_limit=6&_start=${products.length}`
			);
			if (data.length == 0) {
				setHasMore(false);
			} else {
				setHasMore(true);
				setProducts([...products, ...data]);
			}
			// console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	// console.log(products);

	const AddToCartHandler = (product) => {
		const copyuser = { ...users, cart: [...users.cart] };
		const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id);

		if (x == -1) {
			copyuser.cart.push({ product, quantity: 1 });
		} else {
			copyuser.cart[x] = {
				product,
				quantity: copyuser.cart[x].quantity + 1,
			};
		}

		// console.log(copyuser);

		dispatch(asyncUpdateUser(copyuser.id, copyuser));
	};

	const renderProduct = products.map((product) => {
		return (
			<div className="w-[31%] m-3 shadow bg-white/10 p-8 rounded-tl-3xl rounded-br-3xl rounded-bl-4xl flex flex-col items-center justify-center" key={product.id}>
				<img
					className="object-cover aspect-square rounded-tl-3xl rounded-br-3xl rounded-bl-4xl"
					src={product.image}
					alt=""
				/>
				<h1>{product.title}</h1>
				{/* <small>{product.description}</small> */}
				<div className="flex justify-around items-center py-5 w-full">
					<p className="font-black">₹ {product.price}</p>
					<button className="bg-[#4DA6FF] cursor-pointer p-2 text-[#1E1E1E] rounded" onClick={() => AddToCartHandler(product)}>
						Add to cart
					</button>
				</div>
				<Link to={`/product/${product.id}`}>View Details</Link>
			</div>
		);
	});

	return (
		<InfiniteScroll
			className=""
			dataLength={products.length}
			next={fetchProducts}
			hasMore={hasMore}
			loader={<h4>Loading...</h4>}
			endMessage={
				<p style={{ textAlign: "center" }}>
					{" "}
					<b>Yay! You have seen it all! </b>
				</p>
			}
		>
			<div className="px-[10%] w-full h-full flex flex-wrap min-h-[90vh]  bg-[#1E1E1E] relative overflow-hidden">

				<div className="absolute w-[500px] h-[500px] bg-[#4DA6FF] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob top-[-10%] left-[-10%] " />
				<div className="absolute w-[400px] h-[400px] bg-[#7C3AED] rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-2000 top-[20%] right-[-10%]" />
				<div className="absolute w-[450px] h-[450px] bg-[#22D3EE] rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-4000 bottom-[-10%] left-[20%]" />

				<Suspense
					fallback={
						<h1 className="text-center text-5xl text-yellow-500">
							LOADING...
						</h1>
					}
				>
					{renderProduct}
				</Suspense>
			</div>
		</InfiniteScroll>
	);
};

export default Products;
