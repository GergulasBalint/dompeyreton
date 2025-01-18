import PageBreak from "@/components/PageBreak";
import FullPageHeader from "@/components/useful_links/FullPageHeader";
import MainContent from "@/components/useful_links/MainContent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  const locale = cookies["i18next"] || context.req?.locale || context.locale;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Useful_Links = () => {
  const { t } = useTranslation("common");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(t("navigation.useful_links"));
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
      <MainContent />
      <PageBreak />
    </>
  );
};
export default Useful_Links;
