import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className={styles.main}>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <div className={styles.logoContainer}>
              <Logo />
            </div>
          </div>
          <div className="col-12">
            <div className={styles.contactPhoneContainer}>
              <Link href="tel: +33766109101" className={styles.phoneLink}>
                +33 (0)7 66 10 91 01
              </Link>
              <span className={styles.bullet}>&#x2022;</span>
              <Link href="tel: +447740930845" className={styles.phoneLink}>
                +44 (0)7740 930845
              </Link>
            </div>
          </div>
          <div className="col-12">
            <div className={styles.contactEmailContainer}>
              <Link
                href="mailto:info@dompeyreton.com"
                className={styles.emailLink}
              >
                info@dompeyreton.com
              </Link>
            </div>
          </div>
          <div className="col-12">
            <div className={styles.addressContainer}>
              <p className={styles.address}>
                Chateau Vieux Moulin, Chemin de Peyreton, 33141, Villegouge,
                France
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className={styles.subNavContainer}>
              <div className={styles.navLinkContainer}>
                <Link href="/" className={styles.navLink}>
                  {t("navigation.home")}
                </Link>
              </div>
              <div className={styles.navLinkContainer}>
                <Link href="/our_gites" className={styles.navLink}>
                  {t("navigation.our_gites")}
                </Link>
              </div>
              <div className={styles.navLinkContainer}>
                <Link href="/vineyard" className={styles.navLink}>
                  {t("navigation.our_vineyard")}
                </Link>
              </div>
              <div className={styles.navLinkContainer}>
                <Link href="/locality" className={styles.navLink}>
                  {t("navigation.locality")}
                </Link>
              </div>
              <div className={styles.navLinkContainer}>
                <Link href="/reservations" className={styles.navLink}>
                  {t("navigation.reservations")}
                </Link>
              </div>
              <div className={styles.navLinkContainer}>
                <Link href="/gallery" className={styles.navLink}>
                  {t("navigation.gallery")}
                </Link>
              </div>
              <div className={styles.navLinkContainer}>
                <Link href="/about" className={styles.navLink}>
                  {t("navigation.about_us")}
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.copyRightContainer}>
            <div className={styles.copyLinkContainer}>
              <Link href="/terms" className={styles.copyLink}>
                {t("navigation.terms")}
              </Link>
            </div>
            <div className={styles.copyLinkContainer}>
              <Link
                href="/GDPR-compliant Privacy Notice, Rev 1.pdf"
                className={styles.copyLink}
                target="_blank"
                rel="noreferrer"
              >
                Privacy Notice
              </Link>
            </div>
            <div className={styles.copyLinkContainer}>
              <div className={styles.copyRightText}>
                &copy; {new Date().getFullYear()} Dom Peyreton
              </div>
            </div>
            <div className={styles.copyLinkContainer}>
              <a
                href="http://www.pc1.co.uk"
                target="_blank"
                className={styles.copyLink}
                rel="noreferrer"
              >
                Handcrafted by PC1
              </a>
            </div>
          </div>
          <div className={styles.socials}>
            <div className={styles.socialImage}>
              <Link
                href="https://www.facebook.com/profile.php?id=100089073842046"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/footer/social-facebook.png"
                  fill
                  alt="facebook logo"
                />
              </Link>
            </div>
            <div className={styles.socialImage}>
              <Link
                href="https://www.instagram.com/dompeyreton_prestige_cottages/?next=%2F"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/footer/social-instagram.png"
                  fill
                  alt="instagram logo"
                />
              </Link>
            </div>
            <div className={styles.regionalImage}>
              <Image
                src="/footer/region-nouvelle-aquitaine-logo-90.webp"
                fill
                alt="nouvelle aquitaine logo"
              />
            </div>
            <div className={styles.regionalImageGironde}>
              <Image
                src="/footer/logo-gironde-2018.webp"
                fill
                alt="nouvelle aquitaine logo"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
