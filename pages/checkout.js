import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { calculateTotals } from "../features/cart/cartSlice";

const Checkout = () => {
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (amount <= 0) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <main className="max-w-5xl mx-auto pt-8">
          <h1 className="text-4xl font-semibold mb-8 flex justify-center">
            Your Cart is empty
          </h1>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto pt-8">
        <h1 className="text-2xl font-semibold mb-8">Shopping Cart</h1>
        <div className="space-y-8 lg:space-y-0 lg:flex justify-between">
          <div className="">
            {cartItems.map((item) => (
              <CheckoutProduct key={item.id} {...item} />
            ))}
          </div>
          <div className="flex flex-col space-y-4 lg:space-y-36 bg-white p-4 lg:h-72">
            <div>
              Subtotal ({amount} items):{" "}
              <span className="font-semibold">${total}</span>
            </div>
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-1 rounded-sm outline-none whitespace-nowrap">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
