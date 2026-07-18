"use client";

import { useLocale } from "next-intl";

const SECTION_PATHS = { home: "", services: "/services", work: "/work", about: "/about", contact: "/contact" };

export default function ScrollLink({ href, children, onClick, ...props }) {
  const locale = useLocale();

  const handleClick = (event) => {
    event.preventDefault();
    const id = href.replace("#", "");

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const suffix = SECTION_PATHS[id] ?? "";
    window.history.pushState(null, "", `/${locale}${suffix}`);
    onClick?.(event);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
