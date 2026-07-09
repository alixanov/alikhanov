"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import "./Header.css";

const NAV_ITEMS = [
  { id: "home", key: "home", icon: "uil-estate" },
  { id: "services", key: "services", icon: "uil-briefcase-alt" },
  { id: "work", key: "work", icon: "uil-scenery" },
  { id: "about", key: "about", icon: "uil-user" },
  { id: "contact", key: "contact", icon: "uil-message" },
];

export default function Header() {
  const t = useTranslations("nav");
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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => (event) => {
    event.preventDefault();
    const target = id === "home" ? 0 : document.getElementById(id)?.offsetTop;
    if (target !== undefined) {
      window.scrollTo({ top: target, behavior: "smooth" });
    }
    window.history.replaceState(null, "", window.location.pathname);
    setShowMenu(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" onClick={scrollToSection("home")} className="nav__logo">
          ALIKHANOV
        </a>

        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            {NAV_ITEMS.map((item) => (
              <li className="nav__item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={scrollToSection(item.id)}
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
  );
}
