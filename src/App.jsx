import "./App.css";

import { useEffect, useState } from "react";

import ProductList from "./components/ProductList";
import Basket from "./components/Basket";

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

  return (
    <>
      <main>
        <ProductList
          myProducts={myProducts}
          basket={basket}
          setBasket={setBasket}
        />

        {basket.map((item) => (
          <Basket {...item} key={item.id} basket={basket} />
        ))}
      </main>
    </>
  );
}

export default App;
