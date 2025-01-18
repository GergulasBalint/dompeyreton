import styles from "@/styles/TimelineItem.module.css";
import { useInView } from "react-intersection-observer";

const TimelineItem = ({ title, text, isLeft }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div
      className={`
      ${styles.container}
      ${isLeft ? styles.left : styles.right}
      ${inView ? styles.isVisible : ""}
      `}
    >
      <div className={`${styles.content} `}>
        <h2 ref={ref}>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
