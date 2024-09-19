import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/en/home',
        permanent: true,
      },
      {
        source: '/ja',
        destination: '/ja/home',
        permanent: true,
      },
    ]
  },
};

export default withNextIntl(nextConfig);
