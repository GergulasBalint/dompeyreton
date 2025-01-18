import TimelineItem from "@/components/timeline/TimelineItem";
import styles from "@/styles/Timeline.module.css";
import { useTranslation } from "next-i18next";

import timelineDataEn from "@/data/timelineDataEn";
import timelineDataFr from "@/data/timelineDataFr";
import timelineDataEs from "@/data/timelineDataEs";

const Timeline = () => {
  const { i18n } = useTranslation("common");
  const { language } = i18n;

  return (
    <div className={styles.timeline}>
      {language === "en" &&
        timelineDataEn &&
        timelineDataEn.map((timeline, index) => (
          <TimelineItem
            title={timeline.title}
            text={timeline.text}
            isLeft={index % 2 == 0}
            key={index}
          />
        ))}
      {language === "fr" &&
        timelineDataFr &&
        timelineDataFr.map((timeline, index) => (
          <TimelineItem
            title={timeline.title}
            text={timeline.text}
            isLeft={index % 2 == 0}
            key={index}
          />
        ))}
      {language === "es" &&
        timelineDataEs &&
        timelineDataEs.map((timeline, index) => (
          <TimelineItem
            title={timeline.title}
            text={timeline.text}
            isLeft={index % 2 == 0}
            key={index}
          />
        ))}
    </div>
  );
};

export default Timeline;
