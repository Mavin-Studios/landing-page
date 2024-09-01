"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [windowScroll, setWindowScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setWindowScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => scrollTo({ top: 0 })}
      className={`flex items-center justify-center p-4 fixed right-4 bottom-4 rounded-md bg-white shadow-md ${
        windowScroll < 500 ? "hidden" : ""
      }`}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}
