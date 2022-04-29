export default function Product({ basket, setBasket, product }) {
  return (
    <div>
      <p>{product.productdisplayname}</p>
      <button
        onClick={() => {
          if (basket.find((item) => item.id === product.id)) {
            setBasket((prev) =>
              prev.map((item) => {
                if (item.id === product.id) {
                  const copy = { ...item };
                  copy.count++;
                  return copy;
                }
                return item;
              })
            );
          } else setBasket((prev) => prev.concat(product));
        }}
      >
        Add
      </button>
    </div>
  );
}
