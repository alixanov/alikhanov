import "./LegalPage.css";

export default function LegalPage({ doc, lastUpdated, updatedLabel }) {
  return (
    <section className="legal section">
      <div className="container legal__container">
        <h1 className="legal__title">{doc.title}</h1>
        <p className="legal__updated">
          {updatedLabel} {lastUpdated}
        </p>
        <p className="legal__intro">{doc.intro}</p>

        {doc.sections.map((block) => (
          <div className="legal__block" key={block.title}>
            <h2 className="legal__block-title">{block.title}</h2>
            {block.paragraphs.map((paragraph) => (
              <p className="legal__paragraph" key={paragraph.slice(0, 40)}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
