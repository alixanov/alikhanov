"use client";

import { useEffect, useState } from "react";
import "./ScrollUp.css";

export default function ScrollUp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className={visible ? "scrollup show-scroll" : "scrollup"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  );
}
