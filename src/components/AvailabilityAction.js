import styles from "@/styles/AvailabilityAction.module.css";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const AvailabilityAction = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className={styles.taglineMobile}>
            <h4 className={styles.tagline}>{t("taglines.tranquillity")}</h4>
            <h4 className={styles.tagline}>{t("taglines.relaxation")}</h4>
            <h4 className={styles.tagline}>{t("taglines.privacy")}</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className={`col-12 ${styles.background}`}>
          <Image
            src="/home_images/lodge-garden-area-pool.webp"
            className={styles.image}
            alt={"Dompeyreton pool and garden area"}
            fill="fill"
          />
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className={styles.taglineContainer}>
                  <h4 className={styles.tagline}>
                    {t("taglines.tranquillity")}
                  </h4>
                  <h4 className={styles.tagline}>{t("taglines.relaxation")}</h4>
                  <h4 className={styles.tagline}>{t("taglines.privacy")}</h4>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className={styles.actionContainer}>
                  <div className={styles.textContainer}>
                    <h4 className={styles.text}>
                      {t("pricing_action.heading")}
                    </h4>
                  </div>
                  <div className={styles.buttonContainer}>
                    <Link href="/reservations">
                      <button className={styles.button}>
                        {t("pricing_action.buttonText")}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`row ${styles.pointerEvents}`}>
        <div className="col-12">
          <div className={styles.lowerContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityAction;
