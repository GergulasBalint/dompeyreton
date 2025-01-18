import FullPageHeader from "@/components/our_gites/FullPageHeader";
import ExploreLuxuryGites from "@/components/ExploreLuxuryGites";
import MainContent from "@/components/our_gites/MainContent";
import PricingAction from "@/components/PricingAction";
import PageBreak from "@/components/PageBreak";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
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

const CottageIndex = () => {
  const { t } = useTranslation("common");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(t("navigation.our_gites"));
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
      <ExploreLuxuryGites />
      <MainContent />
      <PricingAction />
      <PageBreak />
    </>
  );
};

export default CottageIndex;
