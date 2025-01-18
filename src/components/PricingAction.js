import styles from "@/styles/PricingAction.module.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const PricingAction = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container-fluid">
      <div className={`row`}>
        <div className={`col-12 ${styles.background}`}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.actionContainer}>
                  <h5 className={styles.title}>
                    {t("pricing_action.heading")}
                  </h5>
                  <Link href="/reservations" className={styles.button}>
                    {t("pricing_action.buttonText")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAction;
