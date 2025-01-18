import styles from "../styles/HomeContent.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const HomeContent = () => {
  const { t } = useTranslation("common");

  return (
    <div className={styles.background}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className="col-12 col-lg-6">
            <div className={styles.imageContainer}>
              <Image
                src="/home_images/wine_barrel_cropped.webp"
                className={`${styles.image} ${styles.imageWine}`}
                alt={"Dompeyreton wine"}
                width="575"
                height="470"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.content}>
              <h3 className={styles.title}>
                {t("home.homeContentVineyardHeading")}
              </h3>
              <p className={styles.text}>{t("home.homeContentVineyardText")}</p>
              <Link href="/vineyard">
                <button className={styles.button}>
                  {t("home.homeContentVineyardButton")}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`row ${styles.wineMobile}`}>
          <div className={`col-12 ${styles.wineBg}`}>
            <div className={styles.buttonMobileContainer}>
              <Link href="/vineyard">
                <button className={styles.buttonMobile}>
                  {t("home.homeContentVineyardButton")}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`row ${styles.row}`}>
          <div className="col-12 col-lg-6">
            <div className={`${styles.content} ${styles.contentLow}`}>
              <h3 className={styles.title}>
                {t("home.homeContentLocalityHeading")}
              </h3>
              <p className={styles.text}>{t("home.homeContentLocalityText")}</p>
              <Link href="/locality">
                <button className={styles.button}>
                  {t("home.homeContentLocalityButton")}
                </button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.imageContainer}>
              <Image
                src="/home_images/cathedral.webp"
                className={`${styles.image} ${styles.imageCathedral}`}
                alt={"Dompeyreton village of "}
                width="575"
                height="470"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className={`row ${styles.cathedralMobile}`}>
          <div className={`col-12 ${styles.cathedralBg}`}>
            <div className={styles.buttonMobileContainer}>
              <Link href="/locality">
                <button className={styles.buttonMobile}>
                  {t("home.homeContentLocalityButton")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
