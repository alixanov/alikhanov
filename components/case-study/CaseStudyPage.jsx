import Image from "next/image";
import { Link } from "@/i18n/navigation";
import "./CaseStudyPage.css";

export default function CaseStudyPage({ item, content, labels, locale, allSlugs }) {
  return (
    <section className="case-study section">
      <div className="container case-study__container">
        {/* Plain anchor (full navigation), not the SPA Link: Header lives in
            the shared layout and won't remount on a client transition, so
            its "scroll to #work on load" effect wouldn't fire otherwise. */}
        <a href={`/${locale}/work`} className="case-study__back">
          <i className="uil uil-arrow-left"></i>
          {labels.back}
        </a>

        <div className="case-study__cover">
          {item.cover ? (
            <Image
              src={item.cover}
              alt={content.title}
              fill
              sizes="(max-width: 700px) 100vw, 700px"
              quality={90}
              priority
            />
          ) : (
            <span className="case-study__cover-fallback">{content.title[0]}</span>
          )}
        </div>

        <h1 className="case-study__title">{content.title}</h1>
        <p className="case-study__summary">{content.summary}</p>
        <span className="case-study__year">{item.year}</span>

        <div className="case-study__block">
          <h2 className="case-study__block-title">{labels.problemTitle}</h2>
          <p>{content.problem}</p>
        </div>

        <div className="case-study__block">
          <h2 className="case-study__block-title">{labels.solutionTitle}</h2>
          <p>{content.solution}</p>
        </div>

        <div className="case-study__block">
          <h2 className="case-study__block-title">{labels.resultTitle}</h2>
          <ul className="case-study__list">
            {content.results.map((result) => (
              <li key={result}>
                <i className="uil uil-check-circle"></i>
                {result}
              </li>
            ))}
          </ul>
        </div>

        {content.stack?.length > 0 && (
          <div className="case-study__block">
            <h2 className="case-study__block-title">{labels.stackTitle}</h2>
            <div className="case-study__tags">
              {content.stack.map((tech) => (
                <span key={tech} className="case-study__tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="case-study__actions">
          {item.url && (
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="button button--flex">
              {labels.visitSite}
              <i className="uil uil-external-link-alt button__icon"></i>
            </a>
          )}
          <a href={`/${locale}/contact`} className="button button--outline">
            {labels.cta}
          </a>
        </div>

        {allSlugs.length > 0 && (
          <div className="case-study__more">
            {allSlugs.map((other) => (
              <Link key={other.slug} href={`/work/${other.slug}`} className="case-study__more-item">
                <div className="case-study__more-cover">
                  <Image src={other.cover} alt={other.title} fill sizes="200px" quality={85} />
                </div>
                <span>{other.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
