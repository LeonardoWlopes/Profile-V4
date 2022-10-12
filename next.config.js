/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "pt-br"],
    defaultLocale: "pt-br",
  },
  compiler: {
    styledComponents: true,
  },

};

module.exports = nextConfig;
