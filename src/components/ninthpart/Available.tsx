import styles from "@/styles/NinthPart.module.scss";
import Image from "next/image";

const Available = () => {
  return (
    <div className={`${styles.Menu} ${styles.Available}`}>
      <p className={styles.Title}>Available in</p>

      <div className={styles.Group}>
        {DATA.map((location) => (
          <div className={styles.Location} key={location.title}>
            <Image
              alt=""
              src={location.source}
              className={styles.Image}
              height={50}
              width={50}
            />
            <p>{location.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Available;

const DATA = [
  {
    title: "San Francisco, CA",
    source: "/SF.svg",
  },
  {
    title: "New York, NY",
    source: "/NY.svg",
  },
  {
    title: "Los Angelos, CA",
    source: "/LA.svg",
  },
  {
    title: "Seattle, WA",
    source: "/SE.svg",
  },
];
