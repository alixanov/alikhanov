"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import "./LocaleSwitcher.css";

const LABELS = { ru: "RU", uz: "UZ", en: "EN" };

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const activeLocale = useLocale();

  return (
    <div className="locale-switcher">
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          className={
            loc === activeLocale
              ? "locale-switcher__item is-active"
              : "locale-switcher__item"
          }
        >
          {LABELS[loc]}
        </Link>
      ))}
    </div>
  );
}
