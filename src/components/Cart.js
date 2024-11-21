import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 bg-slate-50">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="flex justify-end">
        <button
          className="mr-80 mb-2 font-medium px-2 bg-neutral-600 text-white rounded-md shadow-sm hover:bg-red-500"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 m-auto shadow-lg bg-amber-100">
        <ItemList items={cartItems} />
        {cartItems.length == 0 && (
          <h2 className="m-4 p-4 font-semibold">Cart is Empty. Add items to the Cart !</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
