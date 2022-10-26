import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

const signin = ({ providers }) => {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div
          key={provider.id}
          className="flex flex-col justify-center mt-20 relative"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            alt="logo"
            width={200}
            height={200}
            objectFit="none"
          />
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="bg-slate-700 hover:bg-slate-800 text-white text-xl font-mono w-64 h-14 rounded-lg absolute -bottom-32 left-[50%] translate-x-[-50%]"
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default signin;

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
