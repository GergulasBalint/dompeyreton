import styles from "@/styles/Contact.module.css";
import Image from "next/image";
import { AddressMap } from "@/components/addressMap";
import { createRef, useEffect, useState } from "react";
import Head from "next/head";
import { FindUs } from "@/components/find_us/FindUs";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "next-i18next";
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

const Contact = () => {
  const [formData, setFormData] = useState({});
  const [title, setTitle] = useState("");
  const recaptchaRef = createRef();

  const { t } = useTranslation("common");
  useEffect(() => {
    setTitle(t("navigation.contact_us"));
  }, [t]);

  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setFormData(new FormData(e.currentTarget));
    recaptchaRef.current.execute();
  }

  const onReCAPTCHAChange = async (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }

    const endpoint = "https://booking.dompeyreton.com/script/sendmail.php";
    // const endpoint = "https://booking.dompeyreton.com/script/test_sendmail.php"; // Uncomment for Testing

    const options = {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: formData,
    };

    try {
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options);
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json();
      if (result.status == "success") {
        alert(result.message);
        setFormValues({ firstname: "", lastname: "", email: "", message: "" });
      } else {
        alert(result.message);
      }
      //response.status(200).json(data2);
    } catch (error) {
      alert("Error sending the message!");
      console.error(error);
      //return response.status(error.status || 500).end(error.message);
    }

    recaptchaRef.current.reset();
  };

  return (
    <>
      <Head>
        {title ? (
          <title>Dompeyreton | {title}</title>
        ) : (
          <title>Dompeyreton</title>
        )}
      </Head>
      <div className="container-fluid">
        <div className={`row ${styles.background}`}>
          <Image
            src="/our_gites/lodge-bed-closeup.webp"
            alt="Picture of the lodge bedroom"
            fill
            priority
            className={styles.bgImage}
          />
          <div className="col-12"></div>
        </div>
        <div className={`row ${styles.contentContainer}`}>
          <div className="col-12">
            <div className={styles.content}>
              <h1 className={styles.mainTitle}>
                {t("contact_us.mainContentTitle")}
              </h1>
              <p className={styles.text}>
                {t("contact_us.mainContentParagraph")}
              </p>
            </div>
          </div>
        </div>
        {FindUs && <FindUs />}
        <div className={`row ${styles.row}`}>
          <div className="col-12">
            <div className={styles.googleMap}>
              <AddressMap />
            </div>
          </div>
          <div className="col-12">
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fname">{t("contact_us.formFirstName")}</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  className="form-control"
                  value={formValues.firstname}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lname">{t("contact_us.formLastName")}</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  className="form-control"
                  value={formValues.lastname}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t("contact_us.formEmail")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formValues.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t("contact_us.formMessage")}</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows={8}
                  onChange={(e) => handleChange(e)}
                  value={formValues.message}
                ></textarea>
              </div>
              <input
                type="submit"
                className={styles.submitButton}
                value={t("contact_us.formSubmit")}
              />
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onReCAPTCHAChange}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
