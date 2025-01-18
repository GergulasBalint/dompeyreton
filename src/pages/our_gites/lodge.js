import FullPageHeader from "@/components/individual_gites/FullPageHeader";
import Content from "@/components/individual_gites/Content";
import InformationTabs from "@/components/individual_gites/InformationTabs";
import OtherInformation from "@/components/individual_gites/OtherInformation";
import WelcomePack from "@/components/individual_gites/WelcomePack";
import PricingAction from "@/components/PricingAction";
import { useEffect, useState } from "react";
import ImageSlider from "@/components/our_gites/ImageSlider";
import Lightbox from "@/components/our_gites/Lightbox";
import dynamic from "next/dynamic";
import Head from "next/head";
import useFetch from "@/hooks/useFetch";
import { useTranslation } from "next-i18next";
const PageBreak = dynamic(() => import("@/components/PageBreak"));
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

const Lodge = () => {
  const [imageIndex, setImageIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);
  const [giteData, setGiteData] = useState(null);
  const name = "lodge";
  const {
    i18n: { language },
  } = useTranslation("common");

  const { data } = useFetch(`/api/gites-${language}`);

  useEffect(() => {
    if (!data) return;
    setGiteData(data.find((gite) => gite[name]));
  }, [data]);

  const { data: piwigoData } = useFetch(
    "https://gallery.dompeyreton.com/ws.php?format=json&method=pwg.categories.getImages&cat_id=5"
  );

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const closeLightBox = () => {
    setImageIndex(null);
  };

  const sliderClicked = (index) => {
    setImageIndex(index);
  };

  const handleNextImage = () => {
    setImageIndex(imageIndex + 1);
  };

  const handlePreviousImage = () => {
    setImageIndex(imageIndex - 1);
  };

  return (
    <>
      {giteData ? (
        <Head>
          <title>Dompeyreton | {giteData[name].name}</title>
        </Head>
      ) : (
        <Head>
          <title>Dompeyreton</title>
        </Head>
      )}
      {giteData && (
        <FullPageHeader
          name={giteData[name].name}
          size={giteData[name].description}
          folder={giteData[name].shortName}
          image={giteData[name].imageFileName}
        />
      )}
      {piwigoData && windowWidth > 992 ? (
        <ImageSlider
          images={piwigoData.result.images}
          sliderClicked={sliderClicked}
        />
      ) : (
        piwigoData && (
          <ImageSlider
            images={piwigoData.result.images}
            sliderClicked={() => {
              sliderClicked(null);
            }}
          />
        )
      )}
      {giteData && (
        <Content title={giteData[name].name} text={giteData[name].content} />
      )}
      {giteData && <InformationTabs giteData={giteData} name={name} />}
      <OtherInformation />
      <WelcomePack />
      <PricingAction />
      {imageIndex !== null && (
        <Lightbox
          src={piwigoData.result.images[imageIndex].derivatives.large.url}
          closeLightBox={closeLightBox}
          currentIndex={imageIndex}
          imagesLength={piwigoData.result.images.length - 1}
          handlePreviousImage={handlePreviousImage}
          handleNextImage={handleNextImage}
        />
      )}
      <PageBreak />
    </>
  );
};

export default Lodge;
