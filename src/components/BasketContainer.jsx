import { useState, useEffect } from "react";
import Basket from "./Basket";
import Form from "./Form";
import ThanksPage from "./ThanksPage";

export default function BasketContainer({
  basket,
  setBasket,
  changeCount,
  setShowBasket,
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [showThanks, setShowThanks] = useState(false);

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
    <section className="max-w-[80%] m-auto flex lg:flex-row flex-col justify-between gap-24 lg:gap-0">
      {showThanks ? (
        <ThanksPage setShowBasket={setShowBasket} />
      ) : (
        <>
          <Basket
            basket={basket}
            setBasket={setBasket}
            changeCount={changeCount}
          />
          <article className="flex-shrink flex flex-col gap-3 max-w-xl">
            {basket.map((product) => (
              <div key={product.id}>
                <h2 className="text-xl">{product.productdisplayname}</h2>
                <p>
                  {product.price}$ x {product.count} ={" "}
                  {product.price * product.count}$
                </p>
              </div>
            ))}
            <p className="text-lg">Total price: {totalPrice.toFixed(2)}$</p>

            <Form
              totalPrice={totalPrice}
              setShowThanks={setShowThanks}
              setBasket={setBasket}
            />
          </article>
        </>
      )}
    </section>
  );
}
