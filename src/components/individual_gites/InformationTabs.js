import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import styles from "@/styles/individual_gites/InformationTabs.module.css";

const InformationTabs = ({ giteData, name }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [facilities, setFacilities] = useState([]);
  const [suites, setSuites] = useState([]);
  const [garden, setGarden] = useState([]);
  const [kitchen, setKitchen] = useState([]);

  const { t } = useTranslation("common");

  const handleTabChange = (tabNUmber) => {
    setActiveTab(tabNUmber);
  };

  useEffect(() => {
    if (!giteData || !name) return;
    setFacilities(giteData[name].information.facilities);
    setSuites(giteData[name].information.suites);
    setGarden(giteData[name].information.garden);
    setKitchen(giteData[name].information.kitchen);
  }, [giteData, name]);

  return (
    <div className={`container-fluid ${styles.background}`}>
      <div className="container">
        <div className={`row ${styles.container}`}>
          <div className="col-12">
            <h3 className={styles.mainTitle}>
              {t("individual_gite.information")}
            </h3>
          </div>
          <div className="col-12">
            <div className={styles.tabs}>
              <div
                className={`${styles.tab} ${
                  activeTab === "tab1" ? styles.active : ""
                }`}
                onClick={() => handleTabChange("tab1")}
              >
                {t("individual_gite.facilities")}
              </div>
              <div
                className={`${styles.tab} ${
                  activeTab === "tab2" ? styles.active : ""
                }`}
                onClick={() => handleTabChange("tab2")}
              >
                {t("individual_gite.suites")}
              </div>
              <div
                className={`${styles.tab} ${
                  activeTab === "tab3" ? styles.active : ""
                }`}
                onClick={() => handleTabChange("tab3")}
              >
                {t("individual_gite.kitchen")}
              </div>
              <div
                className={`${styles.tab} ${
                  activeTab === "tab4" ? styles.active : ""
                }`}
                onClick={() => handleTabChange("tab4")}
              >
                {t("individual_gite.garden")}
              </div>
            </div>
          </div>

          <div className={`col-12 ${styles.tabContentWrapper}`}>
            <div
              className={`${styles.tabContent} ${
                activeTab === "tab1" ? styles.show : styles.hide
              }`}
            >
              <div className={styles.tabWrapper}>
                <ul className={styles.tabList}>
                  {facilities &&
                    facilities.map((facility, i) => (
                      <li key={i} className={styles.tabListItem}>
                        {facility}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div
              className={`${styles.tabContent} ${
                activeTab === "tab2" ? styles.show : styles.hide
              }`}
            >
              <div className={styles.tabWrapper}>
                <ul className={styles.tabList}>
                  {suites &&
                    suites.map((suite, i) => {
                      return (
                        <li key={i} className={styles.themeTitle}>
                          <h4 className={styles.themeH4}>{suite.theme}</h4>
                          <ul className={styles.facilityList}>
                            {suite.facilities &&
                              suite.facilities.map((facility, j) => {
                                return (
                                  <li key={j} className={styles.facility}>
                                    {facility}
                                  </li>
                                );
                              })}
                          </ul>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div
              className={`${styles.tabContent} ${
                activeTab === "tab3" ? styles.show : styles.hide
              }`}
            >
              <div className={styles.kitchenTab}>
                <div className={styles.kitchenInfo}>
                  {kitchen && kitchen.information}
                </div>
                <div className={styles.kitchenTabWrapper}>
                  <ul className={styles.kitchenTabList}>
                    {kitchen &&
                      kitchen.facilities &&
                      kitchen.facilities.map((facility, i) => {
                        return (
                          <li key={i} className={styles.kitchenTabListItem}>
                            {facility}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`${styles.tabContent} ${
                activeTab === "tab4" ? styles.show : styles.hide
              }`}
            >
              <div className={styles.garden}>
                <ul className={styles.gardenList}>
                  {garden &&
                    garden.map((item, i) => {
                      return (
                        <li key={i} className={styles.gardenListItem}>
                          {item}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationTabs;
