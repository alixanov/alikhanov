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

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: `${t("heroTitleLead")}${t("heroTitleAccent")}${t("heroTitleTail")}`,
    description: t("heroSubtitle"),
    alternates: {
      canonical: `https://www.alikhanov.uz/${locale}`,
      languages: {
        ru: "https://www.alikhanov.uz/ru",
        uz: "https://www.alikhanov.uz/uz",
        en: "https://www.alikhanov.uz/en",
      },
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
