import { useState, useEffect } from "react";
import Basket from "./Basket";

export default function BasketContainer({ basket }) {
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
      <Basket basket={basket} />
      <p>Total price:{totalPrice}</p>
    </>
  );
}
