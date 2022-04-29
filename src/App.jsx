import "./App.css";

import { useEffect, useState } from "react";

import ProductList from "./components/ProductList";
import Basket from "./components/Basket";

function App() {
  const [myProducts, setMyProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products")
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, []);

  return (
    <>
      <main>
        <ProductList
          myProducts={myProducts}
          basket={basket}
          counter={counter}
          setCounter={setCounter}
          setBasket={setBasket}
        />

        {basket.map((item) => (
          <Basket key={item.id} basket={basket} counter={counter} />
        ))}
      </main>
    </>
  );
}

export default App;
