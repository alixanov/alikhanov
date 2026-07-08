import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollUp from "@/components/layout/ScrollUp";
import AosInit from "@/components/layout/AosInit";
import YandexMetrica from "@/components/analytics/YandexMetrica";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  metadataBase: new URL("https://www.alikhanov.uz"),
  title: {
    default: "ALIKHANOV — SaaS, CRM, ERP и Telegram-боты на заказ",
    template: "%s | ALIKHANOV",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </head>
      <body suppressHydrationWarning>
        <YandexMetrica />
        <GoogleAnalytics />
        <NextIntlClientProvider messages={messages}>
          <AosInit />
          <Header />
          <main className="main">{children}</main>
          <Footer />
          <ScrollUp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
