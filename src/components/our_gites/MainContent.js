import styles from "@/styles/our_gites/MainContent.module.css";
import { useTranslation } from "next-i18next";

const MainContent = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container">
      <div className={`row ${styles.row}`}>
        <div className="col-12 col-lg-6">
          <div className={styles.taglineContainer}>
            <h3 className={styles.tagline}>{t("taglines.tranquillity")}</h3>
            <h3 className={styles.tagline}>{t("taglines.relaxation")}</h3>
            <h3 className={styles.tagline}>{t("taglines.privacy")}</h3>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className={styles.textContainer}>
            <p className={styles.text}>
              {t("our_gites.mainContentParagraph1")}
            </p>
            <p className={styles.text}>
              {t("our_gites.mainContentParagraph2")}
            </p>
            <p className={styles.text}>
              {t("our_gites.mainContentParagraph3")}
            </p>
            <p className={styles.text}>
              {t("our_gites.mainContentParagraph4")}
            </p>
            <p className={styles.text}>
              {t("our_gites.mainContentParagraph5")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
