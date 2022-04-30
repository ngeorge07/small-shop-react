export default function Product({ basket, setBasket, product, changeCount }) {
  return (
    <article className="flex flex-col justify-between gap-2 border-[0.3px] border-gray-400 rounded-md shadow-md max-w-xs">
      <figure className="flex flex-col flex-grow gap-3">
        <img
          className="border-b-[0.3px] border-gray-400 rounded-t-md"
          src={`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`}
          alt={product.productdisplayname}
        />

        <figcaption className="flex flex-col flex-grow justify-between gap-3 px-5 pb-5">
          <h2>{product.productdisplayname}</h2>

          <div className="flex justify-between">
            {product.discount ? (
              <p className="text-xl font-bold flex flex-col-reverse">
                {(
                  product.price -
                  (product.price * product.discount) / 100
                ).toFixed(2)}
                ${" "}
                <span className="text-sm font-normal line-through">
                  {product.price.toFixed(2)}$
                </span>
              </p>
            ) : (
              <p className="text-xl font-bold self-end">
                {product.price.toFixed(2)}$
              </p>
            )}

            <button
              className="w-fit self-end border-[0.3px] border-gray-400 ml-3 rounded-md px-2 py-1 shadow-sm hover:bg-teal-300 transition-all"
              onClick={() => {
                if (basket.find((item) => item.id === product.id)) {
                  changeCount("plus", product.id);
                } else setBasket((prev) => prev.concat(product));
              }}
            >
              Add to cart
            </button>
          </div>
        </figcaption>
      </figure>
    </article>
  );
}
