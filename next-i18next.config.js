const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "kk"],
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
};
