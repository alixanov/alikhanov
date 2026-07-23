"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "", hpAgree: false });

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
        body: JSON.stringify({ ...form, locale }),
      });

      if (!response.ok) throw new Error("request_failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "", hpAgree: false });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact__form">
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
      <div className="contact__form-div">
        <label className="contact__form-tag" htmlFor="name">
          {t("nameLabel")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="contact__form-input"
        />
      </div>
      <div className="contact__form-div">
        <label className="contact__form-tag" htmlFor="email">
          {t("emailLabel")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="contact__form-input"
        />
      </div>
      <div className="contact__form-div contact__form-area">
        <label className="contact__form-tag" htmlFor="message">
          {t("messageLabel")}
        </label>
        <textarea
          id="message"
          name="message"
          rows="10"
          required
          value={form.message}
          onChange={handleChange}
          className="contact__form-input"
        />
      </div>

      <button className="button button--flex" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? t("submitting") : t("submit")}
        {status === "submitting" ? (
          <i className="bx bx-loader-alt bx-spin button__icon"></i>
        ) : (
          <i className="uil uil-message button__icon"></i>
        )}
      </button>

      {status === "success" && <p className="contact__form-status contact__form-status--success">{t("success")}</p>}
      {status === "error" && <p className="contact__form-status contact__form-status--error">{t("error")}</p>}
    </form>
  );
}
