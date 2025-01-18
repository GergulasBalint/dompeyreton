import styles from "@/styles/vineyard/MainContent.module.css";
import Image from "next/image";
import Timeline from "@/components/timeline/Timeline";

const MainContent = () => {
  return (
    <div className={`container-fluid ${styles.main}`}>
      <div className={styles.imageContainer}>
        <Image
          src="/vineyard/wine_on_barrel.webp"
          className={`${styles.image}`}
          alt={"Tasting Notes"}
          fill
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12"></div>
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
