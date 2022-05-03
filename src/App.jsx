import "./App.css";

import { useEffect, useState } from "react";

import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import BasketContainer from "./components/BasketContainer";
import PageBtn from "./components/PageBtn";

function App() {
  const [myProducts, setMyProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [page, setPage] = useState(0);

  const [showBasket, setShowBasket] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

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
    <>
      <Nav basket={basket} setShowBasket={setShowBasket} />

      <main className="py-28">
        {showBasket ? (
          <BasketContainer
            basket={basket}
            setBasket={setBasket}
            changeCount={changeCount}
            setShowBasket={setShowBasket}
          />
        ) : (
          <>
            <ProductList
              myProducts={myProducts}
              basket={basket}
              setBasket={setBasket}
              changeCount={changeCount}
            />
            <section className="flex justify-between mt-20 border-t-2 border-gray-400 px-5 py-3">
              <PageBtn
                text={"First page"}
                action={() => setPage(0)}
                disabled={page === 0 ? true : false}
              />

              <div className="flex gap-12">
                <PageBtn
                  text={"Prev page"}
                  action={() => setPage(page - 10)}
                  disabled={page === 0 ? true : false}
                />
                <PageBtn
                  text={"Next page"}
                  action={() => setPage(page + 10)}
                  disabled={page === 44095 ? true : false}
                />
              </div>

              <PageBtn
                text={"Last page"}
                action={() => setPage(44095)}
                disabled={page === 44095 ? true : false}
              />
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default App;
