import Head from "next/head";
import { useEffect } from "react";
import Banner from "../components/Banner";
import Feed from "../components/Feed";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  calculateTotals,
  removeFromCart,
} from "../features/cart/cartSlice";

export default function Home({ products }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Amazon</title>
        <meta name="description" content="E-commerce" />
        <link rel="icon" href="/favicon.ico" className="rounded-full" />
      </Head>
      <Header />
      <main className="max-w-5xl mx-auto">
        <Banner />
        <Feed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products },
  };
}
