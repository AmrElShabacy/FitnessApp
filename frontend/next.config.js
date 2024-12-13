/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/auth/signin",
        permanent: true,
      },
      {
        source: "/register",
        destination: "/auth/signup",
        permanent: true,
      },
      {
        source: "/dashboard/settings",
        destination: "/dashboard/settings/general",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["github.com"],
  },
};

module.exports = nextConfig;
