import Product from "./Product";

export default function ProductList({ myProducts, basket, setBasket }) {
  return (
    <section>
      {myProducts.map((product) => (
        <Product
          {...product}
          key={product.id}
          basket={basket}
          setBasket={setBasket}
        />
      ))}
    </section>
  );
}
