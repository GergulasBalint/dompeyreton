import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "@/styles/Gallery.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import useFetch from "@/hooks/useFetch";
const PageBreaker = dynamic(() => import("@/components/PageBreak"));
import LightBox from "@/components/LightBox";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { parseCookies } from "nookies";

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  const locale = cookies["i18next"] || context.req?.locale || context.locale;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Gallery = () => {
  const [imagePreview, setImagePreview] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);
  const [lightBoxImageIndex, setLightBoxImageIndex] = useState(0);
  const [images, setImages] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [imageCaption, setImageCaption] = useState("");
  const [title, setTitle] = useState("");
  const { data } = useFetch(
    "https://gallery.dompeyreton.com/ws.php?format=json&method=pwg.categories.getImages&cat_id=4"
  );
  const {
    t,
    i18n: { language },
  } = useTranslation("common");

  // Set page title based on selected language
  useEffect(() => {
    setTitle(t("navigation.gallery"));
  }, [t]);

  useEffect(() => {
    if (!data) return;
    setImages(data.result.images);
  }, [data]);

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
    if (!images) return;
    const regex = new RegExp(`\\[lang=${language}\\](.*?)\\[\\/lang\\]`, "i");
    const match = images[imagePreview]?.comment?.match(regex);
    setImageCaption(match ? match[1] : "");
  }, [language, imagePreview, images]);

  const handleClick = (image) => {
    const imageIndex = images.indexOf(image);

    if (windowWidth >= 992) {
      setImagePreview(imageIndex);
    } else {
      setImagePreview(imageIndex);
    }

    setLightBoxImageIndex(imageIndex);
  };

  const handlePrev = () => {
    setImagePreview(imagePreview - 1);
  };

  const handleNext = () => {
    setImagePreview(imagePreview + 1);
  };

  return (
    <>
      <Head>
        {title ? (
          <title>Dompeyreton | {title}</title>
        ) : (
          <title>Dompeyreton</title>
        )}
      </Head>
      <div className={styles.pageMargin}></div>
      <div className={styles.blackBackground}>
        <div className={`container ${styles.galleryContainer}`}>
          <h1 className={styles.heading}>{t("gallery.heading")}</h1>
          {images && (
            <>
              <div className={styles.mainImage}>
                {imagePreview <= 0 ? (
                  ""
                ) : (
                  <div className={styles.leftArrow}>
                    <button onClick={handlePrev}>&#10094;</button>
                  </div>
                )}
                <Image
                  src={
                    windowWidth >= 992
                      ? images[imagePreview].derivatives.large.url
                      : images[imagePreview].derivatives.medium.url
                  }
                  priority
                  fill
                  alt=""
                  placeholder="blur"
                  blurDataURL="/placeholder_image.webp"
                  onClick={() => {
                    if (windowWidth < 992) return;
                    setCurrentImage(lightBoxImageIndex);
                  }}
                  sizes="100vw"
                />
                {imagePreview >= images.length - 1 ? (
                  ""
                ) : (
                  <div className={styles.rightArrow}>
                    <button onClick={handleNext}>&#10095;</button>
                  </div>
                )}
              </div>
              <div className={styles.captionText}>
                <p>{imageCaption}</p>
              </div>
            </>
          )}
          <div className={styles.imageSelector}>
            {images &&
              images.map((image, index) => (
                <div
                  className={styles.image}
                  key={`div for image id: ${image.id}`}
                >
                  <Image
                    src={image.derivatives.square.url}
                    key={image.id}
                    alt={`image ${index}`}
                    fill
                    sizes="120px"
                    placeholder="blur"
                    blurDataURL="/placeholder_image.webp"
                    onClick={() => handleClick(image)}
                  />
                </div>
              ))}
          </div>
          <h2 className={styles.subHeading}>{t("gallery.subHeading")}</h2>
          <div className={styles.videos}>
            <video src="/videos/Video1.mp4" controls></video>
            <video src="/videos/Video2.mp4" controls></video>
          </div>
        </div>
      </div>
      <PageBreaker />
      {images && windowWidth >= 992 ? (
        <LightBox
          images={images}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Gallery;
