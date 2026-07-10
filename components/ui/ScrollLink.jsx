"use client";

export default function ScrollLink({ href, children, onClick, ...props }) {
  const handleClick = (event) => {
    event.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", window.location.pathname);
    onClick?.(event);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
