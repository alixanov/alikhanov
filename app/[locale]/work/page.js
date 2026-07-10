import { getTranslations, setRequestLocale } from "next-intl/server";
import WorkSection from "@/components/sections/WorkSection";
import { site } from "@/content/site";

const OG_LOCALES = { ru: "ru_RU", uz: "uz_UZ", en: "en_US" };

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  const title = t("workTitle");
  const description = t("workSubtitle");
  const url = `https://www.alikhanov.uz/${locale}/work`;
  const ogImage = {
    url: "https://www.alikhanov.uz/images/home/profile.jpg",
    width: 800,
    height: 800,
    alt: site.brand,
  };

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ru: "https://www.alikhanov.uz/ru/work",
        uz: "https://www.alikhanov.uz/uz/work",
        en: "https://www.alikhanov.uz/en/work",
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.brand,
      images: [ogImage],
      locale: OG_LOCALES[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

export default async function WorkPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <WorkSection />;
}
