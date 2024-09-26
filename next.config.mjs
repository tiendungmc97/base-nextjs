import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
      {
        source: "/en",
        destination: "/en/login",
        permanent: true,
      },
      {
        source: "/ja",
        destination: "/ja/login",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
