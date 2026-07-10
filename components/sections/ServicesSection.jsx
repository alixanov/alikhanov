"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { services } from "@/content/services";
import Modal from "@/components/ui/Modal";
import ScrollLink from "@/components/ui/ScrollLink";
import "./ServicesSection.css";

export default function ServicesSection() {
  const t = useTranslations("services");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const [openSlug, setOpenSlug] = useState(null);

  const activeService = services.find((s) => s.slug === openSlug);
  const activeContent = activeService?.[locale];

  return (
    <section className="services section" id="services">
      <h2 className="section__title" data-aos="zoom-in">
        {t("title")}
      </h2>
      <span className="section__subtitle" data-aos="zoom-in" data-aos-delay="100">
        {t("subtitle")}
      </span>

      <div className="container services__grid">
        {services.map((service) => (
          <div className="service-card" key={service.slug} data-aos="fade-up">
            <div>
              <span className="icon-badge service-card__icon">
                <i className={`uil ${service.icon}`}></i>
              </span>
              <h3 className="service-card__title">{service[locale].title}</h3>
              <p className="service-card__tagline">{service[locale].tagline}</p>
            </div>
            <button
              type="button"
              className="service-card__link"
              onClick={() => setOpenSlug(service.slug)}
            >
              {tCommon("learnMore")}
              <i className="uil uil-arrow-right"></i>
            </button>
          </div>
        ))}
      </div>

      <Modal open={!!activeService} onClose={() => setOpenSlug(null)}>
        {activeContent && (
          <>
            <h3 className="modal__title">{activeContent.title}</h3>
            <p className="modal__tagline">{activeContent.tagline}</p>
            <p className="modal__description">{activeContent.description}</p>

            <h4 className="modal__section-title">{t("featuresTitle")}</h4>
            <ul className="modal__list">
              {activeContent.features.map((feature) => (
                <li className="modal__list-item" key={feature.title}>
                  <i className="uil uil-check-circle"></i>
                  <div>
                    <strong>{feature.title}.</strong> {feature.description}
                  </div>
                </li>
              ))}
            </ul>

            <h4 className="modal__section-title">{t("processTitle")}</h4>
            <ol className="modal__process">
              {activeContent.process.map((step, index) => (
                <li key={step.title}>
                  <span className="modal__process-number">{index + 1}</span>
                  <div>
                    <strong>{step.title}.</strong> {step.description}
                  </div>
                </li>
              ))}
            </ol>

            <h4 className="modal__section-title">{t("faqTitle")}</h4>
            <div className="modal__faq">
              {activeContent.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>

            <div className="modal__footer">
              {activeService.priceFrom && (
                <span className="modal__price">
                  {t("priceFrom")} {activeService.priceFrom}
                </span>
              )}
              <ScrollLink href="#contact" className="button button--flex" onClick={() => setOpenSlug(null)}>
                {t("ctaButton")}
                <i className="uil uil-message button__icon"></i>
              </ScrollLink>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
