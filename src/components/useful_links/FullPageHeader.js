import styles from "@/styles/useful_links/FullPageHeader.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const FullPageHeader = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container-fluid">
      <div className={`row ${styles.background}`}>
        <Image
          src="/useful_links/useful_links_full_page_header_image.jpg"
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
              {t("useful_links.fullPageHeaderTitle")}
            </h1>
            <p className={styles.text}>
              {t("useful_links.fullPageHeaderText")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageHeader;
