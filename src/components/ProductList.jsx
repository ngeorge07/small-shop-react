import Product from "./Product";

export default function ProductList({
  myProducts,
  basket,
  setBasket,
  counter,
  setCounter,
}) {
  return (
    <section>
      {myProducts.map((product) => (
        <Product
          product={product}
          key={product.id}
          basket={basket}
          setBasket={setBasket}
          counter={counter}
          setCounter={setCounter}
        />
      ))}
    </section>
  );
}
