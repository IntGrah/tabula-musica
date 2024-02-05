"use client";

import { MouseEventHandler } from "react";

export default function ViewMore({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLSpanElement>;
}) {
  return (
    <span
      className="absolute right-0 px-6 py-2 text-xl font-mono bold uppercase underline decoration-2 tracking-wider text-gray-300 transition-colors bg-gray-700 hover:bg-gray-800/90 hover:decoration-white cursor-pointer"
      onClick={onClick}
    >
      View More
    </span>
  );
}
