"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function HeroLeadForm() {
  const t = useTranslations("home");
  const locale = useLocale();
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", contact: "", company: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
          company: form.company,
        }),
      });

      if (!response.ok) throw new Error("request_failed");

      setStatus("success");
      setForm({ name: "", contact: "", company: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="hero-card__form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hp-field"
        value={form.company}
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
        {status === "submitting" ? t("heroCardSubmitting") : t("heroCardSubmit")}
        <i className="uil uil-arrow-right"></i>
      </button>

      {status === "success" && <p className="hero-card__status hero-card__status--success">{t("heroCardSuccess")}</p>}
      {status === "error" && <p className="hero-card__status hero-card__status--error">{t("heroCardError")}</p>}
    </form>
  );
}
