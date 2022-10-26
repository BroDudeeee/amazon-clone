import Product from "./Product";

const Feed = ({ products }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 -mt-16">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Feed;
