"use client";

export default function ScrollLink({ href, children, onClick, ...props }) {
  const handleClick = (event) => {
    onClick?.(event);
    setTimeout(() => {
      window.history.replaceState(null, "", window.location.pathname);
    }, 600);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
