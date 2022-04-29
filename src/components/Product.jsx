export default function Product({ basket, setBasket, product, changeCount }) {
  return (
    <div>
      <p>{product.productdisplayname}</p>
      <p>{product.price}</p>

      <button
        onClick={() => {
          if (basket.find((item) => item.id === product.id)) {
            changeCount("plus", product.id);
          } else setBasket((prev) => prev.concat(product));
        }}
      >
        Add
      </button>
    </div>
  );
}
