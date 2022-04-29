export default function BasketProduct({ productdisplayname, count, price }) {
  return (
    <div>
      <p>{productdisplayname}</p>
      <p>{count}</p>
      <p>Price {price * count}</p>
    </div>
  );
}
