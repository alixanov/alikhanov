"use client";

import { scrollToSection } from "./scrollToSection";

export default function ScrollLink({ href, children, onClick, ...props }) {
  const handleClick = (event) => {
    event.preventDefault();
    scrollToSection(href.replace("#", ""));
    onClick?.(event);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
