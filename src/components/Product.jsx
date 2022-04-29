export default function Product({
  basket,
  setBasket,
  product,
  counter,
  setCounter,
}) {
  return (
    <div>
      <p>{product.productdisplayname}</p>
      <button
        onClick={() => {
          basket.map((item) => item.id).includes(product.id)
            ? setCounter(counter + 1)
            : setBasket((prev) => prev.concat(product));
        }}
      >
        Add
      </button>
    </div>
  );
}
