import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

// The nav bar cosmetically pushes URLs like /uz/services when scrolling to
// that section, but everything still lives on one page (see Header.jsx).
// Rewrite those virtual paths back to the locale root so a direct visit or
// a hard refresh serves the real page instead of a 404.
const VIRTUAL_SECTIONS = ["services", "work", "about", "contact"];

export default function middleware(request) {
  const segments = request.nextUrl.pathname.split("/").filter(Boolean);

  if (segments.length === 2 && routing.locales.includes(segments[0]) && VIRTUAL_SECTIONS.includes(segments[1])) {
    const url = request.nextUrl.clone();
    url.pathname = `/${segments[0]}`;
    return NextResponse.rewrite(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
