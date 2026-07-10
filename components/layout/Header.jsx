"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import "./Header.css";

const NAV_ITEMS = [
  { href: "/", key: "home", icon: "uil-estate" },
  { href: "/services", key: "services", icon: "uil-briefcase-alt" },
  { href: "/work", key: "work", icon: "uil-scenery" },
  { href: "/about", key: "about", icon: "uil-user" },
  { href: "/contact", key: "contact", icon: "uil-message" },
];

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const header = document.querySelector(".header");
    let lastScrolled = false;

    const update = () => {
      const scrolled = window.scrollY >= 60;
      if (scrolled !== lastScrolled) {
        header.classList.toggle("scroll-header", scrolled);
        lastScrolled = scrolled;
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <Link href="/" className="nav__logo">
          ALIKHANOV
        </Link>

        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            {NAV_ITEMS.map((item) => (
              <li className="nav__item" key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setShowMenu(false)}
                  className={
                    pathname === item.href ? "nav__link active-link" : "nav__link"
                  }
                >
                  <i className={`uil ${item.icon} nav__icon`}></i>
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setShowMenu(false)}
          ></i>
        </div>

        <LocaleSwitcher />

        <div className="nav__toggle" onClick={() => setShowMenu((v) => !v)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
