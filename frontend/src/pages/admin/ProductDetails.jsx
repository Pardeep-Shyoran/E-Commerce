import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    asyncDeleteProduct,
    asyncUpdateProduct,
} from "../../store/actions/productActions";
import { toast } from "react-toastify";
import { asyncUpdateUser } from "../../store/actions/userActions";

const ProductDetails = () => {
    const { id } = useParams();
    // console.log(id);

    const {
        productReducer: { products },
        userReducer: { users },
    } = useSelector((state) => state);
    const product = products?.find((product) => product.id == id);
    // console.log(product, users);

    const { register, reset, handleSubmit } = useForm({
        defaultValues: {
            id: product?.id,
            image: product?.image,
            title: product?.title,
            price: product?.price,
            category: product?.category,
            description: product?.description,
        },
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const UpdateProductHandler = (product) => {
        console.log(product);
        dispatch(asyncUpdateProduct(id, product));
        toast.success("Product Updated");
    };

    const DeleteHandler = () => {
        dispatch(asyncDeleteProduct(id));
        toast.warn("Product Deleted!");
        navigate("/products");
    };

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

    return product ? (
        <div className="min-h-[90vh] flex justify-center items-center flex-col bg-[#1E1E1E] relative overflow-hidden">
            
            {/* Blobs */}
            <div className="absolute w-[500px] h-[500px] bg-[#4DA6FF] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob top-[30%] left-[-10%] " />
            <div className="absolute w-[400px] h-[400px] bg-[#7C3AED] rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-2000 top-[0%] right-[10%]" />
            <div className="absolute w-[450px] h-[450px] bg-[#22D3EE] rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-4000 bottom-[-10%] left-[35%]" />


            <div className="mx-[10%] flex gap-10 p-12 rounded-tl-4xl rounded-br-4xl rounded-bl-[6vw] bg-white/10 text-white z-10 mt-12">
                <img className=" h-[65vh] object-cover rounded-tl-4xl rounded-br-4xl rounded-bl-[5vw]" src={product.image} alt="" />
                <div className="w-1/2 px-3">
                    <h1 className="text-5xl mb-10">{product.title}</h1>
                    <p className="mb-5">{product.description}</p>
                    <p className="text-[#4DA6FF] text-3xl mb-5"> ₹ {product.price}</p>
                    <button onClick={() => AddToCartHandler(product)} className="mt-5 bg-[#4DA6FF] cursor-pointer p-2 w-[18vw] text-[#1E1E1E] h-12 text-2xl font-black rounded-bl-3xl rounded-br-xl rounded-tl-xl">Add to Cart</button>
                </div>
            </div>


            {users && users.isAdmin && (
                <>
                    <hr className=" bg-[#4DA6FF] " />
                    <form
                        onSubmit={handleSubmit(UpdateProductHandler)}
                        className= "mx-[10%] my-16 flex flex-col justify-center items-center w-1/2 px-12 py-16 rounded-tl-4xl rounded-br-4xl rounded-bl-[6vw] bg-white/10 text-white z-10"
                    >
                        <input
                            {...register("image")}
                            className="outline-0 border-b p-2 mb-3 text-2xl w-full h-16"
                            type="url"
                            placeholder="Image URL "
                        />
                        <input
                            {...register("title")}
                            className="outline-0 border-b p-2 mb-3 text-2xl w-full h-16"
                            type="text"
                            placeholder="Title"
                        />
                        <input
                            {...register("price")}
                            className="outline-0 border-b p-2 mb-3 text-2xl w-full h-16"
                            type="number"
                            step={0.01}
                            placeholder="Price"
                        />
                        <textarea
                            {...register("description")}
                            className="outline-0 border-b p-2 mb-3 text-2xl w-full h-28"
                            placeholder="Enter Description here..."
                        ></textarea>
                        <input
                            {...register("category")}
                            className="outline-0 border-b p-2 mb-3 text-2xl w-full h-16"
                            type="text"
                            placeholder="Category"
                        />
                        <div className="flex justify-around items-center gap-12">
                            <button className="mt-5 bg-[#4DA6FF] cursor-pointer p-2 w-[18vw] text-[#1E1E1E] h-12 text-2xl font-black rounded-br-3xl rounded-bl-xl rounded-tr-xl">
                                Update Product
                            </button>

                            <button
                                type="button"
                                onClick={DeleteHandler}
                                className="mt-5 bg-[#ff4d4d] cursor-pointer p-2 h-12 text-2xl font-black text-[#1E1E1E] w-[18vw] rounded-bl-3xl rounded-br-xl rounded-tl-xl"
                            >
                                Delete Product
                            </button>
                        </div>
                    </form>
                </>
            )}



        </div>
    ) : (
        "Loading..."
    );
};

export default ProductDetails;
