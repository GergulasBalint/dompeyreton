import styles from "@/styles/useful_links/MainContent.module.css";
import { useEffect, useState } from "react";
import usefulLinksEN from "@/data/usefulLinksEN";
import usefulLinksFR from "@/data/usefulLinksFR";
import usefulLinksES from "@/data/usefulLinksES";
import { useTranslation } from "next-i18next";

const MainContent = () => {
  const {
    i18n: { language },
  } = useTranslation("common");

  const [links, setLinks] = useState(null);

  useEffect(() => {
    switch (language) {
      case "en":
        setLinks(usefulLinksEN);
        break;
      case "fr":
        setLinks(usefulLinksFR);
        break;
      case "es":
        setLinks(usefulLinksES);
        break;

      default:
        setLinks(null);
        break;
    }
  }, [language]);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          {links &&
            links.groups.map((group, index) => (
              <div className="col-12" key={`group ${index}`}>
                <h3 className={styles.linkGroup}>{group.title}</h3>
                <div className={`${styles.groupContainer} row`}>
                  {group.links.map((link, index) => (
                    <div
                      className="col-12 col-sm-6 col-lg-4"
                      key={`${index} link`}
                    >
                      <div className={`${styles.linkContainer} w-100`}>
                        <a
                          href={link.url}
                          className={styles.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.name}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default MainContent;
