export default function Nav({ basket, setShowBasket }) {
  return (
    <nav>
      <ul className="flex gap-10">
        <li>
          <button onClick={() => setShowBasket(false)}>Shop</button>
        </li>
        <li>
          <button onClick={() => setShowBasket(true)}>
            Cart (
            {basket
              .map((product) => product.count)
              .reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                0
              )}
            )
          </button>
        </li>
      </ul>
    </nav>
  );
}
