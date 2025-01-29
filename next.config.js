const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    domains: ['gallery.dompeyreton.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.dompeyreton.com",
        port: "",
        pathname: "/**",
      },
    ],
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
