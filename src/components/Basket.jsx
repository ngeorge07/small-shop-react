import BasketProduct from "./BasketProduct";

export default function Basket({ basket, setBasket }) {
  return (
    <div>
      {basket.map((item) => (
        <BasketProduct
          {...item}
          key={item.id}
          basket={basket}
          setBasket={setBasket}
        />
      ))}
    </div>
  );
}
