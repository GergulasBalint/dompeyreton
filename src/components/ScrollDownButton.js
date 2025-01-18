import styles from "@/styles/ScrollDownButton.module.css";

const ScrollDownButton = () => {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
  // function scroll down 300px from current position

  const scrollDown = () => {
    if (isBrowser()) {
      window.scrollBy({ left: 0, top: 600, behavior: "smooth" });
    }
  };
  return (
    <>
      <div className={styles.container}>
        <svg
          className={styles.button + " bi bi-chevron-down"}
          onClick={scrollDown}
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#ffffff"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </>
  );
};

export default ScrollDownButton;
