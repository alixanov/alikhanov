import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      // Google still has this stale CRA-era URL indexed and it's getting
      // real clicks (Search Console shows it climbing) — it 404s now that
      // the site is on Next.js, so send that traffic to the current CV.
      {
        source: "/static/media/:path*",
        destination: "/ALIKHANOV-CV.pdf",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
