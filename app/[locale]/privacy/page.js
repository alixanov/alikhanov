import { getTranslations, setRequestLocale } from "next-intl/server";
import LegalPage from "@/components/legal/LegalPage";
import { privacy, lastUpdated } from "@/content/legal";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const doc = privacy[locale];
  const url = `https://www.alikhanov.uz/${locale}/privacy`;

  return {
    title: doc.title,
    description: doc.intro,
    alternates: {
      canonical: url,
      languages: {
        ru: "https://www.alikhanov.uz/ru/privacy",
        uz: "https://www.alikhanov.uz/uz/privacy",
        en: "https://www.alikhanov.uz/en/privacy",
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "footer" });

  return <LegalPage doc={privacy[locale]} lastUpdated={lastUpdated[locale]} updatedLabel={t("updated")} />;
}
