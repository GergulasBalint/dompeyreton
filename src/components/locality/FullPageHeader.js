import styles from "@/styles/locality/FullPageHeader.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const FullPageHeader = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="container-fluid">
        <div className={`row ${styles.background}`}>
          <Image
            src="/locality/cathedral-large.webp"
            alt="Large cathedral"
            fill="fill"
            priority
            className={styles.bgImage}
          />
        </div>
      </div>
      <div className="container">
        <div className={`row ${styles.contentContainer}`}>
          <div className="col">
            <div className={styles.content}>
              <h1 className={styles.mainTitle}>
                {t("locality.fullPageHeaderTitle")}
              </h1>
              <p className={styles.text}>{t("locality.fullPageHeaderText1")}</p>
              <div className={styles.imageContainer}>
                <div className={styles.image}>
                  <Image
                    src="/locality/800x600-midpoint-locality-01.webp"
                    alt="Libourne building"
                    sizes="(min-width: 768px) 50%, (min-width: 1200px) 33%, 100%"
                    fill
                  />
                </div>
                <div className={styles.image}>
                  <Image
                    src="/locality/800x600-midpoint-locality-02.webp"
                    alt="Beach with driftwood on sand"
                    sizes="(min-width: 768px) 50%, (min-width: 1200px) 33%, 100%"
                    fill
                  />
                </div>
                <div className={styles.image}>
                  <Image
                    src="/locality/800x600-midpoint-locality-03.webp"
                    alt="Circular plate with a ring of oysters"
                    sizes="(min-width: 768px) 50%, (min-width: 1200px) 33%, 100%"
                    fill
                  />
                </div>
              </div>
              <p className={styles.text}>{t("locality.fullPageHeaderText2")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullPageHeader;
