import styles from "@/styles/individual_gites/Content.module.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Content = ({ title, text }) => {
  const { t } = useTranslation("common");

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className={styles.title}>
            <h2>{title}.</h2>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className={styles.textContainer}>
            <p className={styles.text}>{text}</p>
            <Link href="/reservations" className="brand-btn mb-3">
              {t("pricing_action.buttonText")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
