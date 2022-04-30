import "./App.css";

import { useEffect, useState } from "react";

import ProductList from "./components/ProductList";
import BasketContainer from "./components/BasketContainer";
import PaginationBtns from "./components/PaginationBtns";

function App() {
  const [myProducts, setMyProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(`https://kea-alt-del.dk/t7/api/products/?start=${page}`)
      .then((res) => res.json())
      .then((data) =>
        setMyProducts(data.map((item) => (item = { ...item, count: 1 })))
      );
  }, [page]);

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

      <PaginationBtns page={page} setPage={setPage} />
    </main>
  );
}

export default App;
