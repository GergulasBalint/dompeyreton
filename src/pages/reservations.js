import FullPageHeader from "@/components/pricing/FullPageHeader";
import Content from "@/components/pricing/MainContent";
import SubContent from "@/components/pricing/SubContent";
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

const Pricing = () => {
  const { t } = useTranslation("common");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(t("navigation.reservations"));
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
      <Content />
      <SubContent />
      <PageBreaker />
    </>
  );
};

export default Pricing;
