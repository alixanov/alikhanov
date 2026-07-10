import { getTranslations, setRequestLocale } from "next-intl/server";
import AboutSection from "@/components/sections/AboutSection";
import { about } from "@/content/about";
import { site } from "@/content/site";

const OG_LOCALES = { ru: "ru_RU", uz: "uz_UZ", en: "en_US" };

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  const title = t("title");
  const description = about[locale].intro;
  const url = `https://www.alikhanov.uz/${locale}/about`;
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
        ru: "https://www.alikhanov.uz/ru/about",
        uz: "https://www.alikhanov.uz/uz/about",
        en: "https://www.alikhanov.uz/en/about",
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

export default async function AboutPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutSection />;
}
