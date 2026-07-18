"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import "./LocaleSwitcher.css";

const LABELS = { ru: "RU", uz: "UZ", en: "EN" };

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const activeLocale = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <div className="locale-switcher" ref={ref}>
      <button
        type="button"
        className="locale-switcher__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {LABELS[activeLocale]}
        <i className={open ? "bx bx-chevron-down locale-switcher__chevron is-open" : "bx bx-chevron-down locale-switcher__chevron"}></i>
      </button>

      {open && (
        <div className="locale-switcher__menu">
          {routing.locales
            .filter((loc) => loc !== activeLocale)
            .map((loc) => (
              <Link
                key={loc}
                href={pathname}
                locale={loc}
                className="locale-switcher__option"
                onClick={() => setOpen(false)}
              >
                {LABELS[loc]}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
