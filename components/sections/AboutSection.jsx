import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { about } from "@/content/about";
import ExperienceTimeline from "./ExperienceTimeline";
import "./AboutSection.css";

export default async function AboutSection() {
  const locale = await getLocale();
  const t = await getTranslations("about");
  const content = about[locale];

  return (
    <section className="about section" id="about">
      <h2 className="section__title" data-aos="zoom-in">
        {t("title")}
      </h2>

      <div className="container about__grid">
        <div className="about__image">
          <Image src="/images/home/about.jpg" alt="Shukurullo Alikhanov" fill sizes="320px" />
        </div>

        <div className="about__data">
          <div className="about__stats">
            {content.stats.map((stat) => (
              <div className="about__stat" key={stat.label}>
                <span className="icon-badge about__stat-icon">
                  <i className={`bx ${stat.icon}`}></i>
                </span>
                <h3 className="about__stat-value">{stat.value}</h3>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <p className="about__description">{content.intro}</p>
          <a download href="/ALIKHANOV-CV.pdf" className="button button--flex">
            {t("downloadCv")}
            <i className="uil uil-import button__icon"></i>
          </a>
        </div>
      </div>

      <div className="container">
        <h3 className="about__subheading" data-aos="zoom-in">
          {t("skillsTitle")}
        </h3>
        <div className="about__skills">
          {[content.skills.frontend, content.skills.backend].map((group) => (
            <div className="about__skill-group" key={group.title}>
              <h4 className="about__skill-title">{group.title}</h4>
              <div className="about__skill-list">
                {group.items.map((item) => (
                  <div className="about__skill-item" key={item.name}>
                    <i className="bx bx-badge-check"></i>
                    <div>
                      <h5>{item.name}</h5>
                      <span>{item.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h3 className="about__subheading" data-aos="zoom-in">
          {t("experienceTitle")}
        </h3>
        <ExperienceTimeline education={content.timeline.education} experience={content.timeline.experience} />
      </div>
    </section>
  );
}
