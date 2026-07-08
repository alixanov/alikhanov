import { getTranslations } from "next-intl/server";
import { site } from "@/content/site";
import "./Footer.css";

export default async function Footer() {
  const tNav = await getTranslations("nav");
  const tFooter = await getTranslations("footer");

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">ALIKHANOV</h1>
        <ul className="footer__list">
          <li>
            <a href="#services" className="footer__link">
              {tNav("services")}
            </a>
          </li>
          <li>
            <a href="#work" className="footer__link">
              {tNav("work")}
            </a>
          </li>
          <li>
            <a href="#about" className="footer__link">
              {tNav("about")}
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              {tNav("contact")}
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href={site.social.instagram}
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href={site.social.telegram}
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-telegram"></i>
          </a>
          <a
            href={site.social.github}
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; {new Date().getFullYear()} ALIKHANOV. {tFooter("rights")}
        </span>
      </div>
    </footer>
  );
}
