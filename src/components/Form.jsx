export default function Form({ totalPrice, setShowThanks, setBasket }) {
  return (
    <form
      className="flex flex-col gap-4 mt-10"
      onSubmit={(e) => {
        e.preventDefault();
        setShowThanks(true);
        setBasket([]);
        const payload = {
          firstName: e.target[0].value,
          lastName: e.target[1].value,
          totalPrice: totalPrice.toFixed(2),
        };

        fetch("https://gnmmd2ndsemester-6f2a.restdb.io/rest/simple-shop-v1", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "x-apikey": "61b64c7672a03f5dae822307",
          },
          body: JSON.stringify(payload),
        })
          .then((res) => res.json())
          .then((data) => {
            e.target[0].value = "";
            e.target[1].value = "";
          });
      }}
    >
      <div>
        <label htmlFor="first-name">First name:</label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          className="pl-2 border-2 border-gray-400 rounded-md ml-3"
        />
      </div>

      <div>
        <label htmlFor="last-name">Last name:</label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          className="pl-2 border-2 border-gray-400 rounded-md ml-3"
        />
      </div>

      <button className="rounded-full border-2 border-gray-400 py-1 px-3 hover:bg-green-300 transition-all">
        Checkout
      </button>
    </form>
  );
}
