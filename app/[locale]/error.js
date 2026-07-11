"use client";

import { useTranslations } from "next-intl";

export default function LocaleError({ error, reset }) {
  const t = useTranslations("common");

  return (
    <div className="section" style={{ textAlign: "center", padding: "6rem 1.5rem" }}>
      <h2 className="section__title">{t("errorTitle")}</h2>
      <p className="section__subtitle">{t("errorMessage")}</p>
      <button type="button" className="button" onClick={reset}>
        {t("errorRetry")}
      </button>
    </div>
  );
}
