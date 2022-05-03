export default function ThanksPage({ setShowBasket }) {
  return (
    <article>
      <p>Thank you for your purchase! We registered your order.</p>
      <button
        onClick={() => setShowBasket(false)}
        className="rounded-full border-2 border-gray-400 py-1 px-3 hover:bg-green-300 transition-all"
      >
        Continue shopping
      </button>
    </article>
  );
}
