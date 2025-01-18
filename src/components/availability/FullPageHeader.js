import styles from "@/styles/our_gites/FullPageHeader.module.css";
import Image from "next/image";

const FullPageHeader = () => {
  return (
    <div className="container-fluid">
      <div className={`row ${styles.background}`}>
        <Image
          src="/locality/cathedral-large.webp"
          alt="Picture of the lodge bedroom"
          fill="fill"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className={styles.bgImage}
        />
        <div className="col-12"></div>
      </div>
      <div className={`row ${styles.contentContainer}`}>
        <div className="col-12">
          <div className={styles.content}>
            <h1 className={styles.mainTitle}>Local Amenities</h1>
            <p className={styles.text}>
              Our property is located deep in the Bordeaux vineyards, a short
              drive from the beautiful, world famous hill-top village of St.
              Emilion and about 800m from the local village of Villegouge where
              you will find a small supermarket, hairdresser and artisan
              boulanger for your morning croissants. Libourne, a pretty bastide
              town located at the confluence of the Isle and Dordogne rivers, is
              around 10 minutes’ drive and all the sites and attractions of the
              beautiful city of Bordeaux are around 30 minutes away. All the
              major wine producing areas of Bordeaux (for example St. Emilion,
              Pomerol, Pauillac, St. Estèphe, Medoc and Margaux are a short
              drive away making our gites the perfect base to explore the
              wine-making history and properties of the Bordeaux region. If you
              are looking for exciting nightlife and a hectic social whirl then
              Chateau Vieux Moulin is probably not for you – If, instead, you
              seek peace, tranquillity and the beautiful surroundings of the
              Bordeaux hinterland then you should definitely come and visit us!
              Our welcome booklet provides more details of the local area,
              including recommendations for restaurants and places to visit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageHeader;
