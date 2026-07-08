import { getTranslations, setRequestLocale } from "next-intl/server";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import TestimonialsTeaser from "@/components/home/TestimonialsTeaser";
import AboutSection from "@/components/sections/AboutSection";
import CtaBanner from "@/components/home/CtaBanner";
import ContactSection from "@/components/sections/ContactSection";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/content/site";

const OG_LOCALES = { ru: "ru_RU", uz: "uz_UZ", en: "en_US" };

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  const title = `${t("heroTitleLead")}${t("heroTitleAccent")}${t("heroTitleTail")}`;
  const description = t("heroSubtitle");
  const url = `https://www.alikhanov.uz/${locale}`;
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
        ru: "https://www.alikhanov.uz/ru",
        uz: "https://www.alikhanov.uz/uz",
        en: "https://www.alikhanov.uz/en",
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

export default async function HomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.brand,
    url: "https://www.alikhanov.uz",
    email: site.email,
    telephone: site.phone,
    sameAs: [site.social.telegram, site.social.instagram, site.social.github],
    founder: {
      "@type": "Person",
      name: "Shukurullo Alikhanov",
    },
    areaServed: "UZ",
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <ServicesSection />
      <WorkSection />
      <TestimonialsTeaser />
      <AboutSection />
      <CtaBanner />
      <ContactSection />
    </>
  );
}
