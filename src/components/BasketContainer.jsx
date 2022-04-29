import { useState, useEffect } from "react";
import Basket from "./Basket";

export default function BasketContainer({ basket, setBasket, changeCount }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(
    () =>
      setTotalPrice(
        basket
          .map((product) => product.price * product.count)
          .reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
          )
      ),
    [basket]
  );

  return (
    <>
      <Basket basket={basket} setBasket={setBasket} changeCount={changeCount} />
      <p>Total price:{totalPrice}</p>
    </>
  );
}
