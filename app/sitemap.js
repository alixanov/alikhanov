import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.alikhanov.uz";

export default function sitemap() {
  return routing.locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${BASE_URL}/${l}`])
      ),
    },
  }));
}
