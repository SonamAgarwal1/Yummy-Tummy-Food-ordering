import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  const dispatch = useDispatch();

  const handleClearClick = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-4 m-4">
      <div className="text-2xl font-bold">Cart</div>
      <button
        className=" m-2 p-2 bg-black text-white rounded-lg"
        onClick={handleClearClick}
      >
        Clear Cart 🗑️
      </button>
      {cartItems?.length === 0 && (
        <h2>
          Your cart is empty. Please add something delicious from the menu
        </h2>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
