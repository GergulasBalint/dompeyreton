import styles from "@/styles/pricing/SubContent.module.css";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import DatePicker from "react-datepicker";
import { createRef, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "next-i18next";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MainContent = () => {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [formData, setFormData] = useState({});
  const recaptchaRef = createRef();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    t,
    i18n: { language },
  } = useTranslation("common");

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    guests: "",
    checkin: "",
    checkout: "",
    reservationFor: "",
    ageCheck: false,
  });

  useEffect(() => {
    if (
      !!formValues.name &&
      !!formValues.email &&
      formValues.email === formValues.confirmEmail &&
      !!formValues.reservationFor &&
      !!formValues.guests &&
      !!formValues.checkin &&
      !!formValues.checkout &&
      formValues.ageCheck
    ) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [formValues]);

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
      const response = await fetch(endpoint, options);
      const result = await response.json();

      if (result.status == "success") {
        alert(result.message);
        setFormValues({
          name: "",
          email: "",
          confirmEmail: "",
          guests: "",
          checkin: "",
          checkout: "",
          reservationFor: "",
          ageCheck: false,
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("Error sending the message!");
    }

    recaptchaRef.current.reset();
  };

  return (
    <div className={`container-fluid ${styles.background}`}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className="col-12 col-lg-6 mb-5">
            <h3>{t("reservations.subContentOtherHeading")}</h3>
            <div className={styles.textContainer}>
              <ul className={styles.points}>
                <li>{t("reservations.subContentOtherItem1")}</li>
                <li>{t("reservations.subContentOtherItem2")}</li>
                <li>{t("reservations.subContentOtherItem3")}</li>
              </ul>
            </div>
            <button
              className={styles.welcomeBookletButton}
              onClick={handleShow}
            >
              {t("reservations.subContentWelcomeBookletButton")}
            </button>
            <Link
              className={styles.welcomeBookletDownload}
              href={`/pricing/Welcome_Booklet_${language}.pdf`}
              target="_blank"
            >
              {t("reservations.subContentWelcomeBookletButton")}
            </Link>
            <Modal
              show={show}
              onHide={handleClose}
              centered
              dialogClassName={styles.modalContainer}
              contentClassName={styles.bookletModal}
            >
              <Modal.Body className={styles.bookletBody}>
                <iframe
                  src={`/pricing/Welcome_Booklet_${language}.pdf`}
                  className={styles.booklet}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="dark"
                  className="rounded-0"
                  onClick={handleClose}
                >
                  {t("util.closeButton")}
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="col-12 col-lg-6">
            <h3>{t("reservations.subContentAvailabilityHeading")}</h3>
            <div className={styles.textContainer}>
              <p className={styles.text}>
                {t("reservations.subContentAvailabilityText1")}
              </p>
              <p className={styles.textTelephone}>
                {t("reservations.subContentAvailabilityText2")}
              </p>
              <p className={styles.text}>
                {t("reservations.subContentAvailabilityText3")}
              </p>

              <p>
                <Link
                  href={`/Reservation_Request_Form_${language}.pdf`}
                  target="_blank"
                >
                  {t("reservations.subContentAvailabilityText4Click")}
                </Link>{" "}
                {t("reservations.subContentAvailabilityText4")}
              </p>

              <div className={styles.formWrapper}>
                <h3 className={styles.formTitle}>
                  {t("reservations.subContentEnquiryHeading")}
                </h3>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        {t("reservations.subContentEnquiryName")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        className={`form-control ${styles.inputField}`}
                        id="name"
                        onChange={(e) => handleChange(e)}
                        value={formValues.name}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">
                        {t("reservations.subContentEnquiryEmail")}
                      </label>
                      <input
                        type="email"
                        className={`form-control ${styles.inputField}`}
                        id="email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                        onPaste={(e) => {
                          e.preventDefault();
                          return false;
                        }}
                        value={formValues.email}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="confirmEmail">
                        {t("reservations.subContentEnquiryConfirmEmail")}
                      </label>
                      <input
                        type="email"
                        className={`form-control ${styles.inputField}`}
                        id="confirmEmail"
                        name="confirmEmail"
                        onChange={(e) => handleChange(e)}
                        onPaste={(e) => {
                          e.preventDefault();
                          return false;
                        }}
                        value={formValues.confirmEmail}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="reservationFor">
                        {t("reservations.subContentEnquiryCottage")}
                      </label>
                      <select
                        className={`form-control ${styles.inputField}`}
                        id="reservationFor"
                        name="reservationFor"
                        onChange={(e) => handleChange(e)}
                        value={formValues.reservationFor}
                        required
                      >
                        <option value=""></option>
                        <option value="lodge">
                          {t(
                            "reservations.subContentEnquiryCottageSelectLodge"
                          )}
                        </option>
                        <option value="barn">
                          {t("reservations.subContentEnquiryCottageSelectBarn")}
                        </option>
                        <option value="both">
                          {t("reservations.subContentEnquiryCottageSelectBoth")}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="guests">
                        {t("reservations.subContentEnquiryGuests")}
                      </label>
                      <input
                        className={`form-control ${styles.inputField}`}
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        max="10"
                        step="1"
                        onChange={(e) => handleChange(e)}
                        value={formValues.guests}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12 col-lg-6">
                      <label htmlFor="checkin">
                        {t("reservations.subContentEnquiryCheckIn")}
                      </label>
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={formValues.checkin}
                        onChange={(value) =>
                          handleChange({
                            target: { name: "checkin", value: value },
                          })
                        }
                        name="checkin"
                        required
                      />
                    </div>
                    <div className="form-group col-12 col-lg-6">
                      <label htmlFor="checkout">
                        {t("reservations.subContentEnquiryCheckOut")}
                      </label>
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={formValues.checkout}
                        onChange={(value) =>
                          handleChange({
                            target: { name: "checkout", value: value },
                          })
                        }
                        name="checkout"
                        required
                      />
                    </div>
                    <div className="form-group col-12 col-lg-6 ageCheck">
                      <label htmlFor="ageCheck">
                        {t("reservations.subContentEnquiry18")}
                      </label>
                      <input
                        type="checkbox"
                        name="ageCheck"
                        className={styles.ageCheck}
                        required
                        onChange={(e) => {
                          handleChange({
                            target: {
                              name: "ageCheck",
                              value: e.target.checked,
                            },
                          });
                        }}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mb-4"
                    disabled={submitDisabled}
                  >
                    {t("reservations.subContentEnquiryButtonText")}
                  </button>
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
        </div>
      </div>
    </div>
  );
};

export default MainContent;
