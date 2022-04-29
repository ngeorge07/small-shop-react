import "./App.css";

import { useEffect, useState } from "react";

import ProductList from "./components/ProductList";

function App() {
  const [myProducts, setMyProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products")
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, []);

  return (
    <>
      <main>
        <ProductList myProducts={myProducts} />
      </main>
    </>
  );
}

export default App;
