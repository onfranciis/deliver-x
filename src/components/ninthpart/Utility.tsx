import styles from "@/styles/NinthPart.module.scss";
import Link from "next/link";

const Utility = () => {
  return (
    <div className={styles.Menu}>
      <p className={styles.Title}>Utility Pages</p>

      <div className={styles.Group}>
        <div>
          {DATA1.map((link) => (
            <Link href="" key={link}>
              <p className={styles.Links}>{link}</p>
            </Link>
          ))}

          <Link href="">
            <p className={styles.Browse}>Browse More Templates</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Utility;

const DATA1 = [
  "Start here",
  "Styleguide",
  "Password protected",
  "404 Not found",
  "Licences",
  "Changelog",
];
