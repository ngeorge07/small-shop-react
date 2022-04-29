import Basket from "./Basket";

export default function BasketProduct({
  productdisplayname,
  count,
  price,
  basket,
  setBasket,
  id,
}) {
  return (
    <div>
      <p>{productdisplayname}</p>
      <p>{count}</p>
      <p>Price {price * count}</p>

      <button
        onClick={() => {
          if (basket.find((item) => item.id === id)) {
            setBasket((prev) =>
              prev.map((item) => {
                if (item.id === id) {
                  const copy = { ...item };
                  copy.count > 1 ? copy.count-- : copy.count;
                  return copy;
                }
                return item;
              })
            );
          } else setBasket((prev) => prev.concat(product));
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          if (basket.find((item) => item.id === id)) {
            setBasket((prev) =>
              prev.map((item) => {
                if (item.id === id) {
                  const copy = { ...item };
                  copy.count++;
                  return copy;
                }
                return item;
              })
            );
          } else setBasket((prev) => prev.concat(product));
        }}
      >
        +
      </button>

      <button
        onClick={() => setBasket(basket.filter((item) => item.id !== id))}
      >
        Delete
      </button>
    </div>
  );
}
