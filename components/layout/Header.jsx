"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import "./Header.css";

const NAV_ITEMS = [
  { id: "home", key: "home", icon: "uil-estate" },
  { id: "services", key: "services", icon: "uil-briefcase-alt" },
  { id: "work", key: "work", icon: "uil-scenery" },
  { id: "about", key: "about", icon: "uil-user" },
  { id: "contact", key: "contact", icon: "uil-message" },
];

const SECTION_PATHS = { home: "", services: "/services", work: "/work", about: "/about", contact: "/contact" };

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const header = document.querySelector(".header");
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    let ticking = false;
    let lastScrolled = false;
    let lastActive = "home";

    const update = () => {
      ticking = false;
      const scrolled = window.scrollY >= 60;
      if (scrolled !== lastScrolled) {
        header.classList.toggle("scroll-header", scrolled);
        lastScrolled = scrolled;
      }

      let current = sections[0]?.id;
      for (const section of sections) {
        if (window.scrollY >= section.offsetTop - window.innerHeight / 2) {
          current = section.id;
        }
      }
      if (current !== lastActive) {
        lastActive = current;
        setActiveSection(current);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    // A direct visit or refresh on a cosmetic URL like /uz/services is
    // rewritten by the middleware to serve this same page — scroll to the
    // matching section once on load so it doesn't just land on top.
    const suffix = window.location.pathname.replace(`/${locale}`, "");
    const initialItem = NAV_ITEMS.find((item) => SECTION_PATHS[item.id] === suffix);
    if (initialItem && initialItem.id !== "home") {
      document.getElementById(initialItem.id)?.scrollIntoView({ behavior: "instant", block: "start" });
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [locale]);

  const handleNavClick = (id) => (event) => {
    event.preventDefault();
    setShowMenu(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    window.history.pushState(null, "", `/${locale}${SECTION_PATHS[id] ?? ""}`);
  };

  return (
    <>
      <div className="mobile-brand-bar">
        <a href={`/${locale}`} onClick={handleNavClick("home")} className="mobile-brand-bar__logo">
          ALIKHANOV
        </a>
        <LocaleSwitcher />
      </div>

      <header className="header">
        <nav className="nav container">
          <a href={`/${locale}`} onClick={handleNavClick("home")} className="nav__logo">
            ALIKHANOV
          </a>

          <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list">
              {NAV_ITEMS.map((item) => (
                <li className="nav__item" key={item.id}>
                  <a
                    href={`/${locale}${SECTION_PATHS[item.id]}`}
                    onClick={handleNavClick(item.id)}
                    className={
                      activeSection === item.id ? "nav__link active-link" : "nav__link"
                    }
                  >
                    <i className={`uil ${item.icon} nav__icon`}></i>
                    {t(item.key)}
                  </a>
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
    </>
  );
}
