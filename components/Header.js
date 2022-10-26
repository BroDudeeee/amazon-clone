import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Header = () => {
  const { data: session } = useSession();
  const [signBar, setSignBar] = useState(false);
  const router = useRouter();
  const { amount } = useSelector((store) => store.cart);
  return (
    <header className="p-3 text-white bg-slate-800 sticky top-0 z-50 shadow-md">
      <nav className="flex items-center space-x-4 justify-between rounded-lg">
        <Image
          src="https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png"
          width={100}
          height={50}
          alt="Logo"
          objectFit="contain"
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
            setSignBar(false);
          }}
        />

        <div className="relative flex-grow md:inline-flex rounded-lg hidden text-black">
          <input
            type="text"
            placeholder="Search"
            className="flex flex-1 bg-white outline-none p-1 px-2 pr-10 rounded-lg focus:ring-1 ring-white"
          />
          <MagnifyingGlassIcon className="h-8 absolute top-[50%] translate-y-[-50%] right-0 bg-yellow-500 p-2 rounded-tr-lg rounded-br-lg hover:bg-yellow-600 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm whitespace-nowrap flex items-center">
            <span className="text-xs" onClick={() => setSignBar(false)}>
              Hello,{" "}
            </span>
            {session ? (
              <div>
                <button
                  onClick={() => setSignBar(!signBar)}
                  className="hover:text-gray-200 hover:underline outline-none"
                >
                  {session.user.name}
                </button>
                {signBar && (
                  <div
                    className="absolute bg-white text-black p-2 cursor-pointer hover:bg-gray-100 transition-all rounded-t-lg font-mono flex flex-col items-center"
                    onClick={signOut}
                  >
                    <Image
                      src={session.user.image}
                      alt="Me"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <button>Sign out</button>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setSignBar(!signBar)}
                  className="hover:text-gray-200 hover:underline outline-none"
                >
                  User
                </button>
                {signBar && (
                  <div
                    className="absolute bg-white text-black p-2 cursor-pointer hover:bg-gray-100 transition-all rounded-t-lg font-mono"
                    onClick={signIn}
                  >
                    Sign in
                  </div>
                )}
              </div>
            )}
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="flex items-center relative cursor-pointer hover:text-gray-200"
          >
            <p className="absolute bg-yellow-500 -top-2 right-7 rounded-full w-5 text-center h-5 text-sm font-semibold">
              {amount}
            </p>
            <ShoppingCartIcon className="h-7" />
            <span className="text-xs underline underline-offset-1">Basket</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
