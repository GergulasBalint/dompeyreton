module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "es"],
  },
  react: {
    useSuspense: false,
  },
  detection: {
    order: ["cookie", "header", "querystring"],
    caches: ["cookie"],
  },
};
