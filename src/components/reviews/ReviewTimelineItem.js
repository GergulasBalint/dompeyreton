import styles from "@/styles/reviews/ReviewTimelineItem.module.css";
import { useInView } from "react-intersection-observer";

const ReviewTimelineItem = ({ review, isLeft }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { reviewName, reviewText, reviewDate, reviewSite } = review;

  return (
    <div
      className={`
    ${styles.container}
    ${isLeft ? styles.left : styles.right}
    ${inView ? styles.isVisible : ""}
    `}
    >
      <div className={styles.reviewCard}>
        <h3 className={styles.name}>{reviewName}</h3>
        <p className={styles.reviewText}>{reviewText}</p>
        <div className={styles.reviewInfo} ref={ref}>
          <p className={styles.date}>{reviewDate}</p>
          <p className={styles.reviewSite}>{reviewSite}</p>
        </div>
      </div>
    </div>
  );
};
export default ReviewTimelineItem;
