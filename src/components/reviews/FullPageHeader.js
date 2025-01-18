import styles from "@/styles/reviews/FullPageHeader.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const FullPageHeader = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container-fluid">
      <div className={`row ${styles.background}`}>
        <Image
          src="/reviews/review_full_page_header_image.jpg"
          alt="Picture of the lodge bedroom"
          fill="fill"
          priority
          className={styles.bgImage}
        />
      </div>
      <div className={`row ${styles.contentContainer}`}>
        <div className="col-12">
          <div className={styles.content}>
            <h1 className={styles.mainTitle}>
              {t("reviews.fullPageHeaderTitle")}
            </h1>
            <p className={styles.text}>{t("reviews.fullPageHeaderText")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageHeader;
