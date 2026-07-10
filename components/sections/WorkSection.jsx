"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Mousewheel } from "swiper/modules";
import { caseStudies } from "@/content/case-studies";

// Swiper's loop mode needs enough real slides to stay reliable with
// centeredSlides + slidesPerView:2 (Swiper's own recommendation when the
// dataset is smaller than that minimum is to duplicate it for rendering).
const loopSlides = [...caseStudies, ...caseStudies];
import Modal from "@/components/ui/Modal";
import "./WorkSection.css";

export default function WorkSection() {
  const t = useTranslations("home");
  const tWork = useTranslations("work");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const [openSlug, setOpenSlug] = useState(null);

  const activeCase = caseStudies.find((c) => c.slug === openSlug);
  const activeContent = activeCase?.[locale];

  return (
    <section className="work section" id="work">
      <div className="container">
        <h2 className="section__title" data-aos="zoom-in">
          {t("workTitle")}
        </h2>
        <span className="section__subtitle" data-aos="zoom-in" data-aos-delay="100">
          {t("workSubtitle")}
        </span>
      </div>

      <Swiper
        className="work__slider"
        modules={[EffectCoverflow, Mousewheel]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 3, slideShadows: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
        }}
      >
        {loopSlides.map((item, index) => (
          <SwiperSlide className="work__card" key={`${item.slug}-${index}`}>
            <div className="work__cover">
              {item.cover ? (
                <Image
                  src={item.cover}
                  alt={item[locale].title}
                  fill
                  sizes="(max-width: 700px) 100vw, 700px"
                  quality={90}
                />
              ) : (
                <span className="work__cover-fallback">{item[locale].title[0]}</span>
              )}
            </div>
            <div className="work__body">
              <h3>{item[locale].title}</h3>
              <p>{item[locale].summary}</p>
              <button type="button" className="work__cta" onClick={() => setOpenSlug(item.slug)}>
                {tCommon("readCase")} <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal open={!!activeCase} onClose={() => setOpenSlug(null)}>
        {activeContent && (
          <>
            <h3 className="modal__title">{activeContent.title}</h3>
            <p className="modal__tagline">{activeContent.summary}</p>

            <h4 className="modal__section-title">{tWork("problemTitle")}</h4>
            <p>{activeContent.problem}</p>

            <h4 className="modal__section-title">{tWork("solutionTitle")}</h4>
            <p>{activeContent.solution}</p>

            <h4 className="modal__section-title">{tWork("resultTitle")}</h4>
            <ul className="modal__list">
              {activeContent.results.map((result) => (
                <li className="modal__list-item" key={result}>
                  <i className="uil uil-check-circle"></i>
                  <div>{result}</div>
                </li>
              ))}
            </ul>

            <h4 className="modal__section-title">{tWork("stackTitle")}</h4>
            <div className="work__stack">
              {activeContent.stack?.map((tech) => (
                <span key={tech} className="work__tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="modal__footer">
              {activeCase.url && (
                <a
                  href={activeCase.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--flex"
                >
                  {tCommon("visitSite")}
                  <i className="uil uil-external-link-alt button__icon"></i>
                </a>
              )}
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
