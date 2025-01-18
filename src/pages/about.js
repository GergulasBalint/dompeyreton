import FullPageHeader from "@/components/about/FullPageHeader";
import ExploreLuxuryGites from "@/components/ExploreLuxuryGites";
import dynamic from "next/dynamic";
import Title from "@/components/small_comp/LargeTitle";
import styles from "@/styles/aboutus/about.module.css";
import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
const PageBreaker = dynamic(() => import("@/components/PageBreak"));
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

const About = () => {
  const { t } = useTranslation("common");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(t("navigation.about_us"));
  }, [t]);

  return (
    <>
      <Head>
        {title ? (
          <title>Dompeyreton | {title}</title>
        ) : (
          <title>Dompeyreton</title>
        )}
      </Head>
      <FullPageHeader />
      {ExploreLuxuryGites && (
        <>
          {Title && <Title text={t("exploreGites.heading")} />}
          <ExploreLuxuryGites />
        </>
      )}
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={styles.content}>
              {Title && <Title text={t("about_us.mainContentHeading")} />}
              <p className={`${styles.text} text-center`}>
                {t("about_us.mainContentParagraph")}
              </p>

              <div className={styles.imageContainer}>
                <div className={styles.image}>
                  <Image
                    src="/about_us/midpoint_renovations_01.webp"
                    alt=""
                    sizes="(min-width: 768px) 50%, (min-width: 1200px) 33%, 100%"
                    fill
                  />
                </div>
                <div className={styles.image}>
                  <Image
                    src="/about_us/midpoint_renovations_02.webp"
                    alt=""
                    sizes="(min-width: 768px) 50%, (min-width: 1200px) 33%, 100%"
                    fill
                  />
                </div>
                <div className={styles.image}>
                  <Image
                    src="/about_us/midpoint_renovations_03.webp"
                    alt=""
                    sizes="(min-width: 768px) 50%, (min-width: 1200px) 33%, 100%"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageBreaker />
    </>
  );
};

export default About;
