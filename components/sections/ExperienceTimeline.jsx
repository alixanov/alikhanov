"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import "./ExperienceTimeline.css";

export default function ExperienceTimeline({ education, experience }) {
  const t = useTranslations("about");
  const [tab, setTab] = useState("education");
  const items = tab === "education" ? education : experience;

  return (
    <div className="timeline-block">
      <div className="timeline-tabs">
        <button
          type="button"
          className={tab === "education" ? "timeline-tab timeline-tab--active" : "timeline-tab"}
          onClick={() => setTab("education")}
        >
          <i className="uil uil-graduation-cap"></i>
          {t("educationTab")}
        </button>
        <button
          type="button"
          className={tab === "experience" ? "timeline-tab timeline-tab--active" : "timeline-tab"}
          onClick={() => setTab("experience")}
        >
          <i className="uil uil-briefcase-alt"></i>
          {t("experienceTab")}
        </button>
      </div>

      <div className="timeline">
        {items.map((item, index) => (
          <div
            className={
              index % 2 === 0 ? "timeline__row timeline__row--left" : "timeline__row timeline__row--right"
            }
            key={`${tab}-${item.title}-${item.period}`}
          >
            <div className="timeline__content">
              <h3 className="timeline__title">{item.title}</h3>
              <span className="timeline__place">{item.place}</span>
              <div className="timeline__period">
                <i className="uil uil-calendar-alt"></i>
                {item.period}
              </div>
            </div>
            <span className="timeline__dot"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
