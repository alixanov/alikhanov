import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.alikhanov.uz";

const PATHS = ["", "/privacy", "/terms"];

export default function sitemap() {
  return PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${BASE_URL}/${l}${path}`])
        ),
      },
    }))
  );
}
