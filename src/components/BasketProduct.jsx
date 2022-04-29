import Basket from "./Basket";

export default function BasketProduct({
  productdisplayname,
  count,
  price,
  basket,
  setBasket,
  id,
  changeCount,
}) {
  return (
    <div>
      <p>{productdisplayname}</p>
      <p>{count}</p>
      <p>Price {price * count}</p>

      <button onClick={() => changeCount("minus", id)}>-</button>

      <button onClick={() => changeCount("plus", id)}>+</button>

      <button
        onClick={() => setBasket(basket.filter((item) => item.id !== id))}
      >
        Delete
      </button>
    </div>
  );
}
