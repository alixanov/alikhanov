import { getTranslations } from "next-intl/server";
import { site } from "@/content/site";
import ContactForm from "@/components/contact/ContactForm";
import "./ContactSection.css";

export default async function ContactSection() {
  const t = await getTranslations("contact");

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title" data-aos="zoom-in">
        {t("title")}
      </h2>
      <span className="section__subtitle" data-aos="zoom-in" data-aos-delay="100">
        {t("subtitle")}
      </span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">{t("directTitle")}</h3>
          <div className="contact__info">
            <div className="contact__card">
              <span className="icon-badge contact__card-icon">
                <i className="bx bx-mail-send"></i>
              </span>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">{site.email}</span>
              <a href={`mailto:${site.email}`} className="contact__button">
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <span className="icon-badge contact__card-icon">
                <i className="bx bxl-telegram"></i>
              </span>
              <h3 className="contact__card-title">Telegram</h3>
              <a href={site.social.telegram} target="_blank" rel="noopener noreferrer" className="contact__button">
                @alikhanov13 <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <span className="icon-badge contact__card-icon">
                <i className="bx bxl-instagram"></i>
              </span>
              <h3 className="contact__card-title">Instagram</h3>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="contact__button">
                alikhanov.13 <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <span className="icon-badge contact__card-icon">
                <i className="bx bx-phone"></i>
              </span>
              <h3 className="contact__card-title">Phone</h3>
              <a href={`tel:${site.phone}`} className="contact__button">
                {site.phone} <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
          <p className="contact__bot-note">
            <i className="uil uil-robot"></i> {t("poweredByBot")}
          </p>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">{t("messageLabel")}</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
