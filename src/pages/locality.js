import FullPageHeader from "@/components/locality/FullPageHeader";
import MainContent from "@/components/locality/MainContent";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
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

const Locality = () => {
  const { t } = useTranslation("common");

  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(t("navigation.locality"));
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
      <PageBreaker />
    </>
  );
};

export default Locality;
