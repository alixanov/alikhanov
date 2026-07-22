import { getTranslations } from "next-intl/server";
import { site } from "@/content/site";
import ContactForm from "@/components/contact/ContactForm";
import "./ContactSection.css";

export default async function ContactSection() {
  const t = await getTranslations("contact");

  return (
    <section className="contact section" id="contact">
      <div className="contact__bg-blob contact__bg-blob--1"></div>
      <div className="contact__bg-blob contact__bg-blob--2"></div>

      <h2 className="section__title" data-aos="zoom-in">
        {t("title")}
      </h2>
      <span className="section__subtitle" data-aos="zoom-in" data-aos-delay="100">
        {t("subtitle")}
      </span>

      <div className="contact__panel container">
        <div className="contact__panel-col">
          <h3 className="contact__title">{t("directTitle")}</h3>

          <a href={`mailto:${site.email}`} className="contact__primary">
            <span className="contact__primary-label">Email</span>
            <span className="contact__primary-value">
              <span className="contact__primary-text">{site.email}</span>
              <i className="bx bx-right-arrow-alt"></i>
            </span>
          </a>

          <div className="contact__secondary">
            <a
              href={site.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__secondary-item"
            >
              <span className="contact__secondary-label">Telegram</span>
              <span className="contact__secondary-value">@alikhanov13</span>
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__secondary-item"
            >
              <span className="contact__secondary-label">Instagram</span>
              <span className="contact__secondary-value">alikhanov.13</span>
            </a>
            <a href={`tel:${site.phone}`} className="contact__secondary-item">
              <span className="contact__secondary-label">Phone</span>
              <span className="contact__secondary-value">{site.phone}</span>
            </a>
          </div>

          <p className="contact__bot-note">
            <i className="uil uil-robot"></i> {t("poweredByBot")}
          </p>
        </div>

        <div className="contact__panel-col">
          <h3 className="contact__title">{t("messageLabel")}</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
