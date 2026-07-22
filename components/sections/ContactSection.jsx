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
          <div className="contact__info">
            <a href={`mailto:${site.email}`} className="contact__card">
              <span className="contact__card-body">
                <span className="contact__card-title">Email</span>
                <span className="contact__card-data">{site.email}</span>
              </span>
              <i className="bx bx-right-arrow-alt contact__card-arrow"></i>
            </a>
            <a
              href={site.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card"
            >
              <span className="contact__card-body">
                <span className="contact__card-title">Telegram</span>
                <span className="contact__card-data">@alikhanov13</span>
              </span>
              <i className="bx bx-right-arrow-alt contact__card-arrow"></i>
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card"
            >
              <span className="contact__card-body">
                <span className="contact__card-title">Instagram</span>
                <span className="contact__card-data">alikhanov.13</span>
              </span>
              <i className="bx bx-right-arrow-alt contact__card-arrow"></i>
            </a>
            <a href={`tel:${site.phone}`} className="contact__card">
              <span className="contact__card-body">
                <span className="contact__card-title">Phone</span>
                <span className="contact__card-data">{site.phone}</span>
              </span>
              <i className="bx bx-right-arrow-alt contact__card-arrow"></i>
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
