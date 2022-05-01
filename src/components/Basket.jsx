import BasketProduct from "./BasketProduct";

export default function Basket({ basket, setBasket, changeCount }) {
  return (
    <article className="flex flex-col gap-12">
      {basket.map((item) => (
        <BasketProduct
          product={item}
          key={item.id}
          basket={basket}
          setBasket={setBasket}
          changeCount={changeCount}
        />
      ))}
    </article>
  );
}
