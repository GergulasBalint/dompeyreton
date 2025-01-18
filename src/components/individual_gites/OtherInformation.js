import styles from "@/styles/individual_gites/OtherInformation.module.css";
import { useTranslation } from "next-i18next";

const OtherInformation = () => {
  const { t } = useTranslation("common");

  return (
    <div className={`container-fluid ${styles.background}`}>
      <div className="container">
        <div className={`row ${styles.container}`}>
          <div className={`col-12`}>
            <h4 className={styles.title}>{t("other_information.title")}</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                {t("other_information.period")}
              </li>
              <li className={styles.listItem}>{t("other_information.age")}</li>
              <li className={styles.listItem}>
                {t("other_information.allInclusive")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInformation;
