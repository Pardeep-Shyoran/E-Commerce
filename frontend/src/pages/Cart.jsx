import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/userActions";

const Cart = () => {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.userReducer.users);
    const products = useSelector((state) => state.productReducer.products);

    const increaseQuantityHandler = (index, product) => {
        const copyuser = { ...users, cart: [...users.cart] };

        copyuser.cart[index] = {
            ...copyuser.cart[index],
            quantity: copyuser.cart[index].quantity + 1,
        }

        dispatch(asyncUpdateUser(copyuser.id, copyuser));
    }


    const decreaseQuantityHandler = (index, product) => {
        const copyuser = { ...users, cart: [...users.cart] };

        if (users.cart[index].quantity > 1) {
            copyuser.cart[index] = {
                ...copyuser.cart[index],
                quantity: copyuser.cart[index].quantity - 1,
            };
        } else {
            copyuser.cart.splice(index, 1);
        }

        dispatch(asyncUpdateUser(copyuser.id, copyuser));
    }

    const CartItems = users.cart.map((c, index) => {
        // console.log(c)
        return (
            <li
                className="mx-[10%] flex justify-between items-center bg-white/10 p-4 rounded-tl-3xl rounded-br-3xl rounded-bl-4xl mb-2"
                key={c?.product?.id}
            >
                <img
                    className="w-[7vmax] h-[7vmax] object-cover rounded-tl-xl rounded-br-xl rounded-bl-2xl flex-shrink-0"
                    src={c?.product?.image}
                    alt=""
                />
                <div className="flex-1 ml-4 mr-4">
                    <p className="text-base font-medium truncate">{c?.product?.title}</p>
                </div>

                <div className="w-[100px] text-center text-base font-semibold">
                    ₹ {c?.product?.price * c?.quantity}
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <button onClick={() => decreaseQuantityHandler(index, c)} className="text-xl cursor-pointer">-</button>
                    <span className="mx-3 px-2 py-1 bg-[#4DA6FF] rounded text-white">{c?.quantity}</span>
                    <button onClick={() => increaseQuantityHandler(index, c)} className="text-lg cursor-pointer">+</button>
                </div>
            </li>
        );
    });

    const totalPrice = users.cart.reduce((acc, c) => {
        return acc + c.product.price * c.quantity;
      }, 0);
      

    return (
        <div className="min-h-[90vh] relative overflow-hidden">

            <div className="absolute w-[500px] h-[500px] bg-[#4DA6FF] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob top-[-10%] left-[-10%] " />
            <div className="absolute w-[400px] h-[400px] bg-[#7C3AED] rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-2000 top-[20%] right-[-10%]" />
            <div className="absolute w-[450px] h-[450px] bg-[#22D3EE] rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-4000 bottom-[-10%] left-[20%]" />

            <div className="mx-[10%] text-8xl py-12">
                <h1>Shoping Cart</h1>
            </div>

            <div className="mx-[10%] flex justify-between items-center bg-white/10 p-4 rounded-tl-xl rounded-br-xl rounded-bl-2xl mb-2">
                <div className="object-cover rounded-tl-xl rounded-br-xl rounded-bl-2xl flex-shrink-0">
                    <p>Product Image || </p>
                </div>
                <div className="flex-1 ml-4 mr-4">
                    <p className="text-base font-medium truncate">Product Name</p>
                </div>

                <div className="w-[100px] text-center text-base font-semibold">
                    ₹ Price
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <button className="text-xl cursor-pointer">-</button>
                    <span className="mx-3 px-2 py-1 bg-[#4DA6FF] rounded text-white">Quantity</span>
                    <button className="text-lg cursor-pointer">+</button>
                </div>
            </div>


            <ul className="pb-6">{CartItems}</ul>

            <div className="ml-[10%] mt-4 p-4 w-[40%] bg-[#4DA6FF] text-[#1E1E1E] font-black rounded-lg text-lg mb-12 flex justify-between items-center" >
                <span>Checkout :</span>
                <span>₹ {totalPrice.toFixed(2)}</span>
            </div>

        </div>
    )
};

export default Cart;
