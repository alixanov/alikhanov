"use client";

export default function ScrollLink({ href, children, onClick, ...props }) {
  const handleClick = (event) => {
    event.preventDefault();
    const id = href.replace("#", "");
    const target = id === "home" ? 0 : document.getElementById(id)?.offsetTop;
    if (target !== undefined) {
      window.scrollTo({ top: target, behavior: "smooth" });
    }
    window.history.replaceState(null, "", window.location.pathname);
    onClick?.(event);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
