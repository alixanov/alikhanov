import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { site } from "@/content/site";
import HeroLeadForm from "./HeroLeadForm";
import "./Hero.css";

export default async function Hero() {
  const t = await getTranslations("home");

  return (
    <section className="hero" id="home">
      <div className="hero__bg-blob hero__bg-blob--1"></div>
      <div className="hero__bg-blob hero__bg-blob--2"></div>

      <div className="hero__container container--wide">
        <div className="hero__social">
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hero__social-icon">
            <i className="uil uil-instagram"></i>
          </a>
          <a href={site.social.telegram} target="_blank" rel="noopener noreferrer" className="hero__social-icon">
            <i className="uil uil-telegram"></i>
          </a>
          <a href={site.social.github} target="_blank" rel="noopener noreferrer" className="hero__social-icon">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <div className="hero__data">
          <span className="hero__kicker">
            <span className="hero__kicker-dot"></span>
            {t("heroKicker")}
          </span>

          <h1 className="hero__title">
            {t("heroTitleLead")}
            <span className="hero__title-accent">{t("heroTitleAccent")}</span>
            {t("heroTitleTail")}
          </h1>

          <p className="hero__description">{t("heroSubtitle")}</p>

          <div className="hero__buttons">
            <a href="#contact" className="hero__btn hero__btn--primary">
              {t("heroCtaPrimary")}
              <i className="uil uil-message"></i>
            </a>
            <a href="#work" className="hero__btn hero__btn--outline">
              {t("heroCtaSecondary")}
              <i className="uil uil-arrow-right"></i>
            </a>
          </div>

          <ul className="hero__facts">
            <li>
              <i className="uil uil-layer-group"></i>
              {t("heroFact1")}
            </li>
            <li>
              <i className="uil uil-bolt"></i>
              {t("heroFact2")}
            </li>
            <li>
              <i className="uil uil-telegram-alt"></i>
              {t("heroFact3")}
            </li>
          </ul>
        </div>

        <div className="hero-card">
          <div className="hero-card__header">
            <div className="hero-card__avatar">
              <Image src="/images/home/profile.jpg" alt="Shukurullo Alikhanov" fill sizes="56px" priority />
            </div>
            <div>
              <h3 className="hero-card__title">{t("heroCardTitle")}</h3>
              <span className="hero-card__subtitle">{t("heroCardSubtitle")}</span>
            </div>
          </div>

          <HeroLeadForm />
        </div>

        <a href="#services" className="hero__scroll">
          <i className="bx bx-mouse hero__scroll-icon"></i>
          {t("heroScrollHint")}
          <i className="uil uil-arrow-down"></i>
        </a>
      </div>
    </section>
  );
}
