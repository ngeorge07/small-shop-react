export default function Nav({ basket, setShowBasket }) {
  return (
    <header className=" py-5 border-b-2 fixed bg-white w-full">
      <nav className="w-full flex items-center justify-between max-w-[80%] m-auto">
        <h1 className="text-2xl w-fit">Simple Shop</h1>

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
    </header>
  );
}
