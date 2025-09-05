"use client";

import { CounterProps } from "@/app/_types/Types";

export default function Counter({
  spacing = "w-[7.5rem] h-12",
  children,
  handleDecrement,
  handleIncrement,
}: CounterProps) {
  return (
    <div
      className={`${spacing} bg-neutral-gray flex justify-between items-center text-[0.8125rem] font-bold tracking-[1px] px-4`}
    >
      <button
        className="text-base font-bold text-gray-700 transition-all duration-200 hover:text-brand-orange cursor-pointer"
        onClick={handleDecrement}
      >
        -
      </button>
      {children}
      <button
        className="text-base font-bold text-gray-700 transition-all duration-200 hover:text-brand-orange cursor-pointer"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}
