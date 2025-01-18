import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/NavBar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "next-i18next";
import { Dropdown } from "react-bootstrap";

const NavBar = () => {
  const router = useRouter();
  const { locale } = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const { t } = useTranslation("common");

  // mobile menu variables
  const [isMobile, setIsMobile] = useState(false);

  // toggle function for mobile menu
  const [isExpanded, setIsExpanded] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const [toggleSolidNav, setToggleSolidNav] = useState(false);

  let toggle = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  // react on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const getScrollPosition = window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
    return () => window.removeEventListener("scroll", getScrollPosition);
  }, []);

  useEffect(() => {
    if (router.pathname == "/terms") return setToggleSolidNav(true);
    if (router.pathname == "/gallery") return setToggleSolidNav(true);
    if (scrollPosition > 200) {
      setToggleSolidNav(true);
    } else {
      setToggleSolidNav(false);
    }
  }, [scrollPosition, router.pathname]);

  useEffect(() => {
    router.events.on("beforeHistoryChange", (url, { shallow }) => {
      setIsExpanded(false);
    });
  });

  return (
    <nav
      className={`navbar navbar-expand-lg ${styles.navigation} ${
        toggleSolidNav ? styles.solidNav : ""
      }`}
    >
      <div className="container-xl">
        <Link href="/" className="navbar-brand" locale={locale}>
          <div className={styles.imageContainer}>
            <Image
              src="/logo/logo_white.webp"
              className={`${styles.image} ${styles.imageLogo} + ${
                isMobile ? styles.logoMobile : styles.logoDesktop
              }`}
              alt={"Dompeyreton"}
              width="267"
              height="185"
            />
          </div>
        </Link>
        <LanguageSwitcher version={"smallScreen"} />
        <div className={`navbar-nav ${styles.navItems}`}>
          <Link
            href="/"
            className={`nav-link ${
              router.asPath == "" || router.asPath == "/" ? "navActive" : ""
            }`}
            locale={locale}
          >
            {t("navigation.home")}
          </Link>
          <Link
            href="/our_gites"
            className={`nav-link ${
              router.asPath == "/our_gites" ? "navActive" : ""
            }`}
            locale={locale}
          >
            {t("navigation.our_gites")}
          </Link>
          <Link
            href="/vineyard"
            className={`nav-link ${
              router.asPath == "/vineyard" ? "navActive" : ""
            }`}
            locale={locale}
          >
            {t("navigation.our_vineyard")}
          </Link>
          <Link
            href="/locality"
            className={`nav-link ${
              router.asPath == "/locality" ? "navActive" : ""
            }`}
            locale={locale}
          >
            {t("navigation.locality")}
          </Link>
          <Link
            href="/reservations"
            className={`nav-link ${
              router.asPath == "/reservations" ? "navActive" : ""
            }`}
            locale={locale}
          >
            {t("navigation.reservations")}
          </Link>
          <Link
            href="/gallery"
            className={`nav-link ${
              router.asPath == "/gallery" ? "navActive" : ""
            }`}
            locale={locale}
          >
            {t("navigation.gallery")}
          </Link>
          <Dropdown
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            show={dropdownOpen}
          >
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className={styles.dropdownMenuButton}
            >
              {t("navigation.more_info")}
            </Dropdown.Toggle>

            <Dropdown.Menu className={styles.dropdownMenu}>
              <Dropdown.Item>
                <Link href="/about" locale={locale}>
                  {t("navigation.about_us")}
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/reviews" locale={locale}>
                  {t("navigation.reviews")}
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="">
                <Link href="/useful_links" locale={locale}>
                  {t("navigation.useful_links")}
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/contact" className={styles.button} locale={locale}>
            {t("navigation.contact_us")}
          </Link>
          <button
            className={`${styles.toggler}`}
            type="button"
            data-target="#navbarMenuMobile"
            aria-controls="navbarMenuMobile"
            aria-label="Toggle navigation"
            onClick={toggle}
          >
            <span
              className={`${styles.togglerIcon} ${
                isExpanded ? styles.open : styles.closed
              }`}
            ></span>
            <span
              className={`${styles.togglerIcon} ${
                isExpanded ? styles.openDown : styles.closedDown
              }`}
            ></span>
          </button>
        </div>
        <div
          className={`${styles.mobileMenu} ${
            isExpanded ? styles.showNav : styles.hideNav
          }`}
          id="navbarMenuMobile"
        >
          <div className={`${styles.navMobileLinks}`}>
            <Link href="/" locale={locale}>
              <Image
                src="/logo/logo_white.webp"
                className={`${styles.logoMobile}`}
                alt={"Dompeyreton"}
                width="121"
                height="84"
              />
            </Link>
            <Link
              href="/"
              className={`${styles.navMobLink} ${
                router.asPath == "" || router.asPath == "/" ? "navActive" : ""
              }`}
              locale={locale}
            >
              {t("navigation.home")}
            </Link>

            <Link
              href="/our_gites"
              className={`${styles.navMobLink} ${
                router.asPath == "/our_gites" ? "v" : ""
              }`}
              locale={locale}
            >
              {t("navigation.our_gites")}
            </Link>

            <Link
              href="/vineyard"
              className={`${styles.navMobLink} ${
                router.asPath == "/vineyard" ? "navActive" : ""
              }`}
              locale={locale}
            >
              {t("navigation.our_vineyard")}
            </Link>
            <Link
              href="/locality"
              className={`${styles.navMobLink} ${
                router.asPath == "/locality" ? "navActive" : ""
              }`}
              locale={locale}
            >
              {t("navigation.locality")}
            </Link>
            <Link
              href="/reservations"
              className={`${styles.navMobLink} ${
                router.asPath == "/reservations" ? "navActive" : ""
              }`}
              locale={locale}
            >
              {t("navigation.reservations")}
            </Link>
            <Link
              href="/gallery"
              className={`${styles.navMobLink} ${
                router.asPath == "/gallery" ? "navActive" : ""
              }`}
              locale={locale}
            >
              {t("navigation.gallery")}
            </Link>
            <Link
              href="/about"
              className={`${styles.navMobLink} ${
                router.asPath == "/about" ? "navActive" : ""
              }`}
              locale={locale}
            >
              {t("navigation.about_us")}
            </Link>
            <Link
              href="/reviews"
              className={`${styles.navMobLink} ${
                router.asPath == "/reviews" ? "navActive" : ""
              }`}
              locale={locale}
            >
              {t("navigation.reviews")}
            </Link>
            <Link
              href="/useful_links"
              className={`${styles.navMobLink} ${
                router.asPath == "/useful_links" ? "navActive" : ""
              }`}
              locale={locale}
            >
              {t("navigation.useful_links")}
            </Link>
            <Link href="/contact" className={styles.navMobLink} locale={locale}>
              {t("navigation.contact_us")}
            </Link>
            <LanguageSwitcher version={"smallScreen"} />
            <p className={"white"}>
              +33 (0)7 66 10 91 01
              <br />
              +44 (0)7740 930845
              <br />
              <span>
                Chateaux Vieux Moulin,
                <br />
                Chemin de Peyreton, 33141,
                <br />
                Villegouge, France
              </span>
            </p>
          </div>
        </div>
      </div>
      <LanguageSwitcher version={"largeScreen"} />
    </nav>
  );
};

export default NavBar;
