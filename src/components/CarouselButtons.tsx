"use client";

import { MouseEventHandler } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CarouselButtons() {
  const scrollLeft: MouseEventHandler<HTMLButtonElement> = (e) => {};
  const scrollRight: MouseEventHandler<HTMLButtonElement> = (e) => {};
  return (
    <div className="absolute inset-0 h-full w-full flex justify-between items-center">
      <button
        onClick={scrollLeft}
        className="bg-gray-200 text-black rounded-full p-2 absolute left-0 top-1/2 -translate-y-1/2"
      >
        <FaChevronLeft size={18} />
      </button>
      <button
        onClick={scrollRight}
        className="bg-gray-200 text-black rounded-full p-2 absolute right-0 top-1/2 -translate-y-1/2"
      >
        <FaChevronRight size={18} />
      </button>
    </div>
  );
}
