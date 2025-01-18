import styles from "../styles/FullPageHeader.module.css";
import Link from "next/link";
import Image from "next/image";
import ScrollDownButton from "./ScrollDownButton";
import { useTranslation } from "next-i18next";

const FullPageHeader = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className={`container-fluid ${styles.mainContainer}`}>
        <div className={styles.imageContainer}>
          <Image
            src="/home_images/barn_garden_area.webp"
            alt="Living area"
            fill
            priority
          />
        </div>
        <div className={`${styles.mainRow}`}>
          <div>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>{t("home.fullPageHeaderTitle")}</h1>
            </div>
            <div className={styles.button}>
              <Link className={styles.link} href="/reservations">
                {t("home.fullPageHeaderButton")}
              </Link>
            </div>
            <ScrollDownButton />
          </div>
        </div>
      </div>
      <div className={styles.mobileContainer}></div>
    </>
  );
};

export default FullPageHeader;
