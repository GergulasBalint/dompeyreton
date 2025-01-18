import Head from "next/head";
import styles from "@/styles/terms/Terms.module.css";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

import termsEn from "@/data/termsEn";
import termsFr from "@/data/termsFr";
import termsEs from "@/data/termsEs";
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

export default function Terms() {
  const {
    t,
    i18n: { language },
  } = useTranslation("common");
  const [title, setTitle] = useState("");
  const [terms, setTerms] = useState(null);

  useEffect(() => {
    setTitle(t("navigation.terms"));
  }, [t]);

  useEffect(() => {
    switch (language) {
      case "en":
        setTerms(termsEn);
        break;
      case "fr":
        setTerms(termsFr);
        break;
      case "es":
        setTerms(termsEs);
        break;
      default:
        setTerms(null);
        break;
    }
  }, [language]);

  return (
    <>
      <Head>
        {title ? (
          <title>Dompeyreton | {title}</title>
        ) : (
          <title>Dompeyreton</title>
        )}
      </Head>
      {terms && (
        <div className={`container`}>
          <div className={styles.heading}>
            <h1>{terms.pageHeading}</h1>
            <p className={styles.notice}>{terms.notice}</p>
          </div>
          <section className={styles.terms}>
            <ol>
              {terms.sections.map((section, index) => (
                <li key={index}>
                  {/* Section Heading */}
                  <span className={styles.sectionHeading}>{section.title}</span>
                  {/* Section Paragraphs */}
                  {section.content.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  {/* Section Sub Paragraphs */}
                  {section.content.subParagraphs && (
                    <ol>
                      {section.content.subParagraphs.map(
                        (subParagraph, index) => (
                          <li type="i" key={index}>
                            {subParagraph}
                          </li>
                        )
                      )}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </section>
        </div>
      )}
    </>
  );
}
