import Product from "./Product";

export default function ProductList({ myProducts }) {
  return (
    <section>
      {myProducts.map((product) => (
        <Product key={product.id} />
      ))}
    </section>
  );
}
