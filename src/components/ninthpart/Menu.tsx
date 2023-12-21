import styles from "@/styles/NinthPart.module.scss";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <p className={styles.Title}>Menu</p>

      <div className={styles.Group}>
        <div>
          {DATA1.map((link) => (
            <Link href="" key={link}>
              <p className={styles.Links}>{link}</p>
            </Link>
          ))}
        </div>

        <div>
          {DATA2.map((link) => (
            <Link href="" key={link}>
              <p className={styles.Links}>{link}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;

const DATA1 = ["Home", "About", "Contact", "Blog", "Blog posts"];
const DATA2 = ["Plans", "Plan single", "Register"];
