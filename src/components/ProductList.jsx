import Product from "./Product";

export default function ProductList({
  myProducts,
  basket,
  setBasket,
  changeCount,
}) {
  return (
    <section className="grid grid-cols-responsive gap-12 justify-items-center">
      {myProducts.map((product) => (
        <Product
          product={product}
          key={product.id}
          basket={basket}
          setBasket={setBasket}
          changeCount={changeCount}
        />
      ))}
    </section>
  );
}
