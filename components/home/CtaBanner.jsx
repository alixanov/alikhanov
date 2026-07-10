import { getTranslations } from "next-intl/server";
import ScrollLink from "@/components/ui/ScrollLink";
import "./CtaBanner.css";

export default async function CtaBanner() {
  const t = await getTranslations("home");

  return (
    <section className="cta-banner section">
      <div className="container cta-banner__container">
        <h2 className="cta-banner__title">{t("ctaTitle")}</h2>
        <p className="cta-banner__subtitle">{t("ctaSubtitle")}</p>
        <ScrollLink href="#contact" className="button button--flex">
          {t("ctaButton")}
          <i className="uil uil-message button__icon"></i>
        </ScrollLink>
      </div>
    </section>
  );
}
