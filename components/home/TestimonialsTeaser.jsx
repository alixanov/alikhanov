"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { testimonials } from "@/content/testimonials/data";
import "./TestimonialsTeaser.css";

function TestimonialCard({ item, locale }) {
  return (
    <div className="testimonial__card">
      {item.image ? (
        <Image src={item.image} alt={item[locale].name} width={60} height={60} className="testimonial__img" />
      ) : (
        <span className="testimonial__img testimonial__img-fallback">{item[locale].name[0]}</span>
      )}
      <h3 className="testimonial__name">{item[locale].name}</h3>
      <p className="testimonial__description">{item[locale].quote}</p>
    </div>
  );
}

export default function TestimonialsTeaser() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="testimonials-teaser section">
      <div className="container">
        <h2 className="section__title" data-aos="zoom-in">
          {t("testimonialsTitle")}
        </h2>
        <span className="section__subtitle" data-aos="zoom-in" data-aos-delay="100">
          {t("testimonialsSubtitle")}
        </span>
      </div>

      <div className="testimonials-teaser__marquee">
        <div className="testimonials-teaser__track">
          {testimonials.map((item) => (
            <TestimonialCard item={item} locale={locale} key={item.id} />
          ))}
          {testimonials.map((item) => (
            <TestimonialCard item={item} locale={locale} key={`dup-${item.id}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
