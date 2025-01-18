import styles from "@/styles/individual_gites/FullPageHeader.module.css";
import Image from "next/image";
import Link from "next/link";
import ScrollDownButton from "../ScrollDownButton";

const FullPageHeader = ({ name, size, folder, image }) => {
  return (
    <div className={`container-fluid ${styles.containerFluid}`}>
      <div className={`row ${styles.background}`}>
        <Image
          src={`/our_gites/${folder}/${image}.webp`}
          alt={`Picture of the ${name} bedroom`}
          fill="fill"
          className={styles.bgImage}
        />
        <div className={styles.overlay}>
          <div className={styles.contentContainer}>
            <h1 className={styles.contentTitle}>{name}</h1>
            <hr className={styles.underline}></hr>
            <p className={styles.contentText}>{size}</p>
            <Link className={styles.button} href="/reservations">
              Reservations
            </Link>
          </div>
          <div className={styles.scrollDown}>
            <ScrollDownButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageHeader;
