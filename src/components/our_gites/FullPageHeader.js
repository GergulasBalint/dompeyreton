import styles from "@/styles/our_gites/FullPageHeader.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const FullPageHeader = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container-fluid">
      <div className={`row ${styles.background}`}>
        <Image
          src="/our_gites/lodge-bed-closeup.webp"
          alt="Picture of the lodge bedroom"
          fill
          priority
          className={styles.bgImage}
        />
      </div>
      <div className={`row ${styles.contentContainer}`}>
        <div className="col-12">
          <div className={styles.content}>
            <h1 className={styles.mainTitle}>
              {t("our_gites.fullPageHeaderTitle")}
            </h1>
            <p className={styles.text}>{t("our_gites.fullPageHeaderText")}</p>
            <p className={styles.text}>{t("our_gites.fullPageHeaderText2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageHeader;
