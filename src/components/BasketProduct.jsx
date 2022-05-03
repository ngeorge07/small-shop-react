export default function BasketProduct({
  basket,
  setBasket,
  changeCount,
  product,
}) {
  return (
    <figure className="flex gap-5 rounded-lg max-w-xl">
      <img
        className="rounded-l-lg aspect-square object-contain object-center max-w-[7rem] sm:max-w-[12rem]"
        src={`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`}
        alt={product.productdisplayname}
      />

      <figcaption className="py-5 flex flex-col justify-between gap-2 w-full mr-5">
        <div>
          <h2 className="text-lg mb-3">{product.productdisplayname}</h2>
          {product.discount ? (
            <p className="text-lg font-bold">
              {(
                (product.price - (product.price * product.discount) / 100) *
                product.count
              ).toFixed(2)}
              ${" "}
              <span className="text-sm font-normal line-through mr-5 sm:mr-0">
                {(product.price * product.count).toFixed(2)}$
              </span>
            </p>
          ) : (
            <p className="text-lg font-bold">
              {(product.price * product.count).toFixed(2)}$
            </p>
          )}
        </div>

        <div className="flex gap-4 flex-col sm:flex-row items-center mt-2 sm:mt-0">
          <div className="flex gap-4 items-center">
            <button
              disabled={product.count <= 1 ? true : false}
              className="rounded-full border-2 border-gray-400 pt-[0.3rem] pb-[0.6rem] px-[0.5rem] leading-[11px] text-2xl hover:bg-teal-300 transition-all disabled:bg-slate-500"
              onClick={() => changeCount("minus", product.id)}
            >
              -
            </button>
            <span className="text-xl">{product.count}</span>
            <button
              className="rounded-full border-2 border-gray-400 pt-[0.3rem] pb-[0.6rem] px-[0.3rem] leading-[11px] text-2xl hover:bg-teal-300 transition-all disabled:bg-slate-500"
              onClick={() => changeCount("plus", product.id)}
            >
              +
            </button>
          </div>

          <button
            onClick={() =>
              setBasket(basket.filter((item) => item.id !== product.id))
            }
            className="sm:ml-auto sm:mr-10 rounded-full border-2 border-gray-400 py-1 px-3 hover:bg-red-300 transition-all"
          >
            Remove
          </button>
        </div>
      </figcaption>
    </figure>
  );
}
