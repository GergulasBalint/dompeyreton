import { useTranslation } from "next-i18next";
import styles from "./assets/css/LanguageSwitcher.module.css";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

let Cookies;
if (typeof window !== "undefined") {
  Cookies = require("js-cookie");
}

const LanguageSwitcher = ({ version }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const router = useRouter();

  const { i18n } = useTranslation();

  const changeLanguage = (langCode) => {
    langCode === "GB"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage(langCode.toLowerCase());
    Cookies.set("i18next", i18n.language);
    router.push(router.asPath, undefined, { locale: i18n.language });
  };

  useEffect(() => {
    i18n.language === "en"
      ? setSelectedLanguage("GB")
      : setSelectedLanguage(i18n.language.toUpperCase());
    Cookies.set("i18next", i18n.language);
  }, [i18n.language]);

  return (
    <div
      className={
        version === "largeScreen" ? styles.largeScreen : styles.smallScreen
      }
    >
      <ReactFlagsSelect
        selected={selectedLanguage}
        onSelect={changeLanguage}
        countries={["GB", "FR", "ES"]}
        showSelectedLabel={false}
        selectedSize={35}
        showOptionLabel={false}
        optionsSize={35}
        placeholder={""}
        fullWidth={false}
      />
    </div>
  );
};
export default LanguageSwitcher;
