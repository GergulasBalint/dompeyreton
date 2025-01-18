import React, { useEffect, useState } from "react";
import styles from "@/styles/find_us/FindUs.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useTranslation } from "next-i18next";

const FindUs = () => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");

  const [findUs, setFindUs] = useState([]);

  const { t, i18n } = useTranslation("common");
  const { language } = i18n;

  useEffect(() => {
    fetch(`/api/findUs-${language}`)
      .then((res) => res.json())
      .then((data) => {
        setFindUs(data);
      });
  }, [language]);

  const handleClose = () => {
    setModalTitle("");
    setModalBody("");
    setShow(false);
  };

  const handleShow = (data) => {
    setShow(true);
    setModalTitle(data.title);
    setModalBody(data.body);
  };

  return (
    <div className="row">
      <div className={`col-12 ${styles.section}`}>
        <h2 className={styles.heading}>{t("find_us.heading")}</h2>
        <p className={styles.text}>
          <span className={styles.boldText}>What Three Words App</span> -
          overnight/braved/pristine
        </p>
        <p className={styles.text}>{t("find_us.text1")}</p>
        <p>{t("find_us.text2")}</p>
        {findUs && (
          <ul className={styles.list}>
            {findUs.map((data, index) => (
              <p
                className={styles.modalLink}
                key={index}
                onClick={() => {
                  handleShow(data);
                }}
              >
                {data.title}
              </p>
            ))}
          </ul>
        )}
        {modalTitle && modalBody && (
          <Modal show={show} onHide={handleClose} className={styles.modal}>
            <Modal.Header closeButton>
              <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {modalBody.map((text, index) => (
                <p className={styles.modalText} key={index}>
                  {text}
                </p>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="rounded-0"
                variant="dark"
                onClick={handleClose}
              >
                {t("util.closeButton")}
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
};
export { FindUs };
