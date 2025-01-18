import Link from "next/link";
import styles from "@/styles/ExploreSingleGite.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const ExploreSingleGite = ({ name, title, size, link, image }) => {
  const { t } = useTranslation("common");
  return (
    <div
      className={`explore-single-gite ${image} ${styles.single_gite_container}`}
    >
      <Image
        src={`/our_gites/${name}/${image}.webp`}
        alt={title}
        fill="fill"
        style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <hr className={styles.underline}></hr>
        <p className={styles.text}>{size}</p>
        <Link href={link} className={styles.link}>
          {t("exploreGites.detailsLinkText")}
        </Link>
      </div>
    </div>
  );
};

export default ExploreSingleGite;
