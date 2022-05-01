import { useState, useEffect } from "react";
import Basket from "./Basket";

export default function BasketContainer({ basket, setBasket, changeCount }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(
    () =>
      setTotalPrice(
        basket
          .map((product) =>
            product.discount
              ? (product.price - (product.price * product.discount) / 100) *
                product.count
              : product.price * product.count
          )
          .reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
          )
      ),
    [basket]
  );

  return (
    <section className="max-w-[80%] m-auto">
      <Basket basket={basket} setBasket={setBasket} changeCount={changeCount} />
      <p>Total price:{totalPrice}</p>
    </section>
  );
}
