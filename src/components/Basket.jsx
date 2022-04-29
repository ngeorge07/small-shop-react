import BasketProduct from "./BasketProduct";

export default function Basket({ basket }) {
  return (
    <div>
      {basket.map((item) => (
        <BasketProduct {...item} key={item.id} />
      ))}
    </div>
  );
}
