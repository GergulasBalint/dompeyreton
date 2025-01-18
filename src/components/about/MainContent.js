import styles from "@/styles/aboutus/MainContent.module.css";
import Image from "next/image";
import Link from "next/link";

const MainContent = () => {
  return (
    <div className="container">
      <div className={`row ${styles.row}`}>
        <div className="col-12 col-lg-6">
          <div className={styles.taglineContainer}>
            <Image
              src="/about_us/midpoint-aboutus-01.webp"
              className={`${styles.image} ${styles.imageWine}`}
              alt={"The Lodge"}
              width="800"
              height="600"
            ></Image>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className={styles.textContainer}>
            <h2>The Lodge</h2>
            <p className={styles.text}>
              The Lodge is a luxury rental property that offers guests two
              beautifully designed double ensuite bedrooms. Each bedroom is
              spacious and boasts high-quality bedding and goose feather
              pillows, with shower products provided in all bathrooms. The Lodge
              features underfloor heating and cooling, and all the bedrooms are
              equipped with a TV/DVD with international channels, as well as
              Wi-Fi access both inside and in the garden.
            </p>
          </div>
          <div className={styles.calltoaction}>
            <Link href="/our_gites/lodge" className={styles.link}>
              Find out more
            </Link>
          </div>
        </div>
      </div>

      <div className={`row ${styles.row}`}>
        <div className="col-12 col-lg-6">
          <div className={styles.taglineContainer}>
            <Image
              src="/about_us/midpoint-aboutus-02.webp"
              className={`${styles.image} ${styles.imageWine}`}
              alt={"The Barn"}
              width="800"
              height="600"
            ></Image>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className={styles.textContainer}>
            <h2>The Barn</h2>
            <p className={styles.text}>
              The Barn is a luxurious rental with 3 spacious double ensuite
              bedrooms. Each of the rooms is beautifully designed with a unique
              theme, including Animal Magic, Modern Chic, and French Chic,
              providing a comfortable and unforgettable experience. The Barn is
              equipped with top-of-the-line facilities including high-quality
              bedding with goose feather pillows, all en-suite bedrooms with
              shower products, and underfloor heating and cooling throughout the
              ground floor.
            </p>
          </div>
          <div className={styles.calltoaction}>
            <Link href="/our_gites/barn" className={styles.link}>
              Find out more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
