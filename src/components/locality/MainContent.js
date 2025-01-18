import styles from "@/styles/locality/MainContent.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const MainContent = () => {
  const { t } = useTranslation("common");

  return (
    <div className={`container-fluid ${styles.background}`}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className="col-12 col-lg-6">
            <div className={styles.taglineContainer}>
              <Image
                src="/locality/grapes.webp"
                className={`${styles.image} ${styles.imageWine}`}
                alt={"Grapes on the vine"}
                width="800"
                height="600"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.textContainer}>
              <h2>{t("locality.mainContentHeading")}</h2>
              <p className={styles.text}>
                {t("locality.mainContentParagraph1")}
              </p>
              <p className={styles.text}>
                {t("locality.mainContentParagraph2")}
              </p>
              <p className={styles.text}>
                {t("locality.mainContentParagraph3")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
