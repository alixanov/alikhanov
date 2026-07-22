import { getTranslations, setRequestLocale } from "next-intl/server";
import LegalPage from "@/components/legal/LegalPage";
import { terms, lastUpdated } from "@/content/legal";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const doc = terms[locale];
  const url = `https://www.alikhanov.uz/${locale}/terms`;

  return {
    title: doc.title,
    description: doc.intro,
    alternates: {
      canonical: url,
      languages: {
        ru: "https://www.alikhanov.uz/ru/terms",
        uz: "https://www.alikhanov.uz/uz/terms",
        en: "https://www.alikhanov.uz/en/terms",
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function TermsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "footer" });

  return <LegalPage doc={terms[locale]} lastUpdated={lastUpdated[locale]} updatedLabel={t("updated")} />;
}
