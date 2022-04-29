import "./App.css";

import { useEffect, useState } from "react";

import ProductList from "./components/ProductList";
import BasketContainer from "./components/BasketContainer";

function App() {
  const [myProducts, setMyProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products")
      .then((res) => res.json())
      .then((data) =>
        setMyProducts(data.map((item) => (item = { ...item, count: 1 })))
      );
  }, []);

  function changeCount(operator, id) {
    setBasket((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const copy = { ...item };
          operator === "plus"
            ? copy.count++
            : copy.count > 1
            ? copy.count--
            : copy.count;
          return copy;
        }
        return item;
      })
    );
  }

  return (
    <>
      <main>
        <ProductList
          myProducts={myProducts}
          basket={basket}
          setBasket={setBasket}
          changeCount={changeCount}
        />

        <BasketContainer
          basket={basket}
          setBasket={setBasket}
          changeCount={changeCount}
        />
      </main>
    </>
  );
}

export default App;
