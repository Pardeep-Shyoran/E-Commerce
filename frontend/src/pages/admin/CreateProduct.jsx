import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { asyncCreateProduct } from "../../store/actions/productActions";

const CreateProduct = () => {
    const { register, reset, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const CreateProductHandler = (product) => {
        product.id = nanoid();
        console.log(product);
        dispatch(asyncCreateProduct(product));
        navigate("/products");

        toast.success("New Product Created!");
    };

    return (
        <div className="min-h-[90vh] flex justify-center items-center relative overflow-hidden">

            <form
                onSubmit={handleSubmit(CreateProductHandler)}
                className="flex flex-col justify-center items-center w-1/2 px-12 py-16 rounded-tl-4xl rounded-br-4xl rounded-bl-[6vw] bg-white/10 text-white z-10"
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
                    step="0.01"
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
                <button className='mt-5 bg-[#4DA6FF] cursor-pointer p-2 rounded-bl-3xl rounded-br-xl rounded-tl-xl w-[50%] text-[#1E1E1E] h-12 text-2xl font-black'>Create Product</button>
            </form>
        </div>
    )
}

export default CreateProduct;