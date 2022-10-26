import Image from "next/image";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({
  id,
  title,
  price,
  category,
  description,
  image,
}) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const item = {
      id,
      title,
      price,
      category,
      description,
      image,
    };

    dispatch(addToCart(item));
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white flex-1 lg:mr-10 lg:h-fit mb-2 flex-col md:flex-row space-y-4 md:space-y-0">
      <div className="flex space-x-8">
        <div className="w-auto h-auto">
          <Image src={image} width={200} height={400} alt="Product" />
        </div>
        <div className="pt-4">
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-sm">{description}</p>
          <p>${price}</p>
        </div>
      </div>
      <div className="flex flex-col space-y-2 flex-grow w-full md:w-fit">
        <button
          className="bg-yellow-500 whitespace-nowrap hover:bg-yellow-600 font-semibold px-4 py-1 rounded-sm outline-none"
          onClick={addItemToCart}
        >
          Add to Cart
        </button>
        <button
          onClick={() => dispatch(removeFromCart({ id }))}
          className="bg-yellow-500 whitespace-nowrap hover:bg-yellow-600 font-semibold px-4 py-1 rounded-sm outline-none"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
