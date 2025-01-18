import Image from "next/image";
import styles from "@/styles/individual_gites/WelcomePack.module.css";
import { useState, useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import { useTranslation } from "next-i18next";

const WelcomePack = () => {
  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);
  const [provisions, setProvisions] = useState(null);

  const {
    t,
    i18n: { language },
  } = useTranslation("common");

  const { data } = useFetch(`/api/provisions-${language}`);

  useEffect(() => {
    if (!data) return;
    setTitle(data.title);
    setText(data.text);
    setProvisions(data.provisions);
  }, [data]);

  return (
    <div className="container">
      <div className={`row ${styles.container}`}>
        <div className="col-12 col-lg-6">
          <Image
            src="/home_images/wine.webp"
            alt="Welcome pack provisions photograph"
            fill="fill"
            style={{ objectFit: "cover", objectPosition: "center" }}
            className={styles.image}
          />
        </div>
        <div className="col-12 col-lg-6">
          <div className={styles.content}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.text}>{text}</p>
            <p className={styles.provText}>
              <strong>{t("welcome_pack.includes")}</strong>
            </p>
            <ul className={styles.list}>
              {provisions &&
                provisions.map((provision, i) => (
                  <li key={i} className={styles.listItem}>
                    {provision}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePack;
