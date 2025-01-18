import styles from "@/styles/our_gites/Lightbox.module.css";
import Image from "next/image";

const Lightbox = (props) => {
  const closeLightBox = () => {
    props.closeLightBox();
  };

  return (
    <div className={styles.lightboxWrap}>
      <Image src={props.src} alt={props.src} fill sizes="100vw" />
      {props.currentIndex != 0 && (
        <button
          id="decrement"
          className={styles.lightBoxLeft}
          onClick={props.handlePreviousImage}
        ></button>
      )}
      {props.currentIndex < props.imagesLength && (
        <button
          id="increment"
          className={styles.lightBoxRight}
          onClick={props.handleNextImage}
        ></button>
      )}
      <button className={styles.lightboxClose} onClick={closeLightBox}>
        <svg width="35" height="35" viewBox="0 0 24 24">
          <path
            fill="#fff"
            d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Lightbox;
