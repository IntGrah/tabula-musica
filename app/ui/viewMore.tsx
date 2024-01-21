"use client";

export default function ViewMore() {
  function handleClick() {
    console.error();
  }
  return (
    <span
      className="hidden absolute right-0 px-8 py-2 text-2xl font-mono bold uppercase tracking-wider text-gray-400 transition-colors bg-gray-700 hover:bg-gray-800/90 rounded-b-2xl border-b-4 border-b-gray-400 cursor-pointer"
      onClick={handleClick}
    >
      View More
    </span>
  );
}
