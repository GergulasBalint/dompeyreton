import styles from "@/styles/vineyard/FullPageHeader.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const FullPageHeader = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container-fluid">
      <div className={`row ${styles.background}`}>
        <Image
          src="/vineyard/wine-large.webp"
          alt="Picture of the lodge bedroom"
          fill="fill"
          priority
          className={styles.bgImage}
        />
        <div className="col-12"></div>
      </div>
      <div className={`row ${styles.contentContainer}`}>
        <div className="col-12">
          <div className={styles.content}>
            <h1 className={styles.mainTitle}>
              {t("our_vineyard.fullPageHeaderTitle")}
            </h1>
            <p className={styles.text}>
              {t("our_vineyard.fullPageHeaderText")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageHeader;
