export default function Product({ basket, setBasket, productdisplayname }) {
  return (
    <div>
      <p>{productdisplayname}</p>
      <button
        onClick={() => setBasket((prev) => prev.concat(productdisplayname))}
      >
        Add
      </button>
    </div>
  );
}
