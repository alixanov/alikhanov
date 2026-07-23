"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function HeroLeadForm() {
  const t = useTranslations("home");
  const locale = useLocale();
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", contact: "", hpAgree: false });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.contact,
          message: t("heroCardAutoMessage"),
          locale,
          hpAgree: form.hpAgree,
        }),
      });

      if (!response.ok) throw new Error("request_failed");

      setStatus("success");
      setForm({ name: "", contact: "", hpAgree: false });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="hero-card__form" onSubmit={handleSubmit}>
      <input
        type="checkbox"
        name="hpAgree"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hp-field"
        checked={form.hpAgree}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder={t("heroCardName")}
        required
        value={form.name}
        onChange={handleChange}
        className="hero-card__input"
      />
      <input
        type="text"
        name="contact"
        placeholder={t("heroCardContact")}
        required
        value={form.contact}
        onChange={handleChange}
        className="hero-card__input"
      />
      <button type="submit" className="hero-card__submit" disabled={status === "submitting"}>
        {status === "submitting"
          ? t("heroCardSubmitting")
          : status === "success"
            ? t("heroCardSent")
            : t("heroCardSubmit")}
        {status === "submitting" ? (
          <i className="bx bx-loader-alt bx-spin"></i>
        ) : status === "success" ? (
          <i className="bx bx-check"></i>
        ) : (
          <i className="uil uil-arrow-right"></i>
        )}
      </button>

      {status === "success" && <p className="hero-card__status hero-card__status--success">{t("heroCardSuccess")}</p>}
      {status === "error" && <p className="hero-card__status hero-card__status--error">{t("heroCardError")}</p>}
    </form>
  );
}
