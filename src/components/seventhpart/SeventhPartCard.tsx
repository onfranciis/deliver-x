import Image from "next/image";
import styles from "@/styles/SeventhPart.module.scss";
import Link from "next/link";

export interface ISeventhPartCardProps {
  Data: {
    title: string;
    date: string;
    image: string;
  };
}

const SeventhPartCard = ({ Data }: ISeventhPartCardProps) => {
  return (
    <Link href={""} className={styles.SeventhPartCard}>
      <Image
        alt=""
        src={Data?.image ?? ""}
        height={100}
        width={100}
        className={styles.Logo}
      />

      <p className={styles.Title}>{Data?.title}</p>

      <div className={styles.Bottom}>
        <p className={styles.Read}>
          Read More
          <Image
            alt=""
            src={"/arrow.svg"}
            height={25}
            width={25}
            className={styles.Arrow}
          />
        </p>

        <p className={styles.Date}>{Data?.date}</p>
      </div>
    </Link>
  );
};

export default SeventhPartCard;
