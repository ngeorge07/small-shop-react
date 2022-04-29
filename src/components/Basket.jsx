export default function Basket({ basket }) {
  return <div>{basket.map((item) => item)}</div>;
}
