import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { site } from "@/content/site";
import { caseStudies, getCaseStudy, getCaseStudySlugs } from "@/content/case-studies";
import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import JsonLd from "@/components/seo/JsonLd";

export function generateStaticParams() {
  const slugs = getCaseStudySlugs();
  return routing.locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const item = getCaseStudy(slug);
  if (!item) return {};

  const content = item[locale];
  const url = `https://www.alikhanov.uz/${locale}/work/${slug}`;
  const ogImage = {
    url: `https://www.alikhanov.uz${item.cover}`,
    width: 1200,
    height: 675,
    alt: content.title,
  };

  return {
    title: content.title,
    description: content.summary,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `https://www.alikhanov.uz/${l}/work/${slug}`])
      ),
    },
    openGraph: {
      title: content.title,
      description: content.summary,
      url,
      siteName: site.brand,
      images: [ogImage],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.summary,
      images: [ogImage.url],
    },
  };
}

export default async function CaseStudyRoute({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const item = getCaseStudy(slug);
  if (!item) notFound();

  const content = item[locale];
  const t = await getTranslations({ locale, namespace: "work" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: content.title,
    description: content.summary,
    url: `https://www.alikhanov.uz/${locale}/work/${slug}`,
    image: `https://www.alikhanov.uz${item.cover}`,
    dateCreated: String(item.year),
    author: {
      "@type": "Person",
      name: "Shukurullo Alikhanov",
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <CaseStudyPage
        item={item}
        content={content}
        locale={locale}
        labels={{
          problemTitle: t("problemTitle"),
          solutionTitle: t("solutionTitle"),
          resultTitle: t("resultTitle"),
          stackTitle: t("stackTitle"),
          visitSite: tCommon("visitSite"),
          cta: tCommon("cta"),
          back: tNav("work"),
        }}
        allSlugs={caseStudies.filter((c) => c.slug !== slug).map((c) => ({ slug: c.slug, title: c[locale].title, cover: c.cover }))}
      />
    </>
  );
}
