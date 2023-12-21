import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <div>
        <Image
          src="/logo.svg"
          alt=""
          height={100}
          width={100}
          className={styles.Logo}
        />

        <div className={styles.Links}>
          <Link href="">
            <p>Home</p>
          </Link>
          <Link href="">
            <p>About</p>
          </Link>
          <Link href="">
            <p>Pricing</p>
          </Link>
          <Link href="">
            <p>Pages</p>
          </Link>

          <div className={styles.RightActions}>
            <Link href="">
              <p>Cart(0)</p>
            </Link>

            <Link href="">
              <button className={styles.Download}>Download app</button>
            </Link>

            <Link href="">
              <button className={styles.Register}>Register</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
