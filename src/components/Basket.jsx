export default function Basket({ basket, productdisplayname, count }) {
  return (
    <div>
      <p>{productdisplayname}</p>
      <p>{count}</p>
    </div>
  );
}
