export default function Basket({ basket, counter }) {
  return (
    <div>
      <p>{basket.map((item) => item.id)}</p>
      <p>{counter}</p>
    </div>
  );
}
