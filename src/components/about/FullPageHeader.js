import styles from "@/styles/aboutus/FullPageHeader.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const FullPageHeader = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container-fluid">
      <div className={`row ${styles.background}`}>
        <Image
          src="/about_us/about_us.webp"
          alt="Picture of the lodge bedroom"
          fill
          priority
          className={styles.bgImage}
          sizes="100vw"
        />
        <div className="col-12"></div>
      </div>
      <div className={`row ${styles.contentContainer}`}>
        <div className="col-12">
          <div className={styles.content}>
            <h1 className={styles.mainTitle}>
              {t("about_us.fullPageHeaderTitle")}
            </h1>
            <p className={styles.text}>{t("about_us.fullPageHeaderText1")}</p>
            <p className={styles.text}>{t("about_us.fullPageHeaderText2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageHeader;
