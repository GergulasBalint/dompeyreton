import { useTranslation } from "next-i18next";
import ExploreSingleGite from "./ExploreSingleGite";
import styles from "@/styles/ExploreLuxuryGites.module.css";

const ExploreLuxuryGites = () => {
  const { t } = useTranslation("common");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`col-12 col-lg-6 ${styles.singleContainer}`}>
          <ExploreSingleGite
            name={"lodge"}
            title={t("exploreGites.gites.lodge.name")}
            size={t("exploreGites.gites.lodge.description")}
            link={"/our_gites/lodge"}
            image={"01_lodge_bedroom1"}
          />
        </div>
        <div className={`col-12 col-lg-6 ${styles.singleContainer}`}>
          <ExploreSingleGite
            name={"barn"}
            title={t("exploreGites.gites.barn.name")}
            size={t("exploreGites.gites.barn.description")}
            link={"/our_gites/barn"}
            image={"barn-bedroom-area"}
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreLuxuryGites;
