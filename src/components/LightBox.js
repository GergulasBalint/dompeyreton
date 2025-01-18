import styles from "@/styles/LightBox.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

const LightBox = ({ images, currentImage, setCurrentImage }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [imageCaption, setImageCaption] = useState("");
  const {
    i18n: { language },
  } = useTranslation("common");

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    // Images are pulled from https://gallery.dompeyreton.com/
    // In order for translations to be available for the image caption the below
    // snippet needs to be placed into the Description text area input for each image.
    // [lang=en]ENGLISH_TEXT[/lang]
    // [lang=fr]FRENCH_TEXT[/lang]
    // [lang=es]SPANISH_TEXT[/lang]
    // This is then parsed by the below RegEx making it's selection based on the current language.

    const regex = new RegExp(`\\[lang=${language}\\](.*?)\\[\\/lang\\]`, "i");
    const match = images[currentImage]?.comment?.match(regex);
    setImageCaption(match ? match[1] : "");
  }, [language, currentImage, images]);

  return (
    <>
      {currentImage != null ? (
        <div className={styles.lightboxWrap}>
          <Image
            src={
              windowWidth >= 1600
                ? images[currentImage].derivatives.xlarge.url
                : windowWidth >= 1200
                ? images[currentImage].derivatives.large.url
                : images[currentImage].derivatives.medium.url
            }
            alt={images[currentImage].name}
            fill
            sizes="100vw"
          />
          {currentImage > 0 ? (
            <button
              id="decrement"
              className={styles.lightBoxLeft}
              onClick={() => {
                setCurrentImage(currentImage - 1);
              }}
            ></button>
          ) : (
            ""
          )}
          {currentImage < images.length - 1 ? (
            <button
              id="increment"
              className={styles.lightBoxRight}
              onClick={() => {
                setCurrentImage(currentImage + 1);
              }}
            ></button>
          ) : (
            ""
          )}
          <button
            className={styles.lightboxClose}
            onClick={() => setCurrentImage(null)}
          >
            <svg width="35" height="35" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"
              />
            </svg>
          </button>
          {imageCaption && <p className={styles.captionText}>{imageCaption}</p>}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LightBox;
