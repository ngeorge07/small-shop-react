export default function PageBtn({ text, action, disabled }) {
  return (
    <button
      className="w-fit border-[0.3px] border-gray-400  rounded-md px-2 py-1 shadow-sm hover:bg-teal-300 transition-all disabled:bg-slate-500"
      onClick={action}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
