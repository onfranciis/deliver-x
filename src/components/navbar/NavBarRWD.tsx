"use client";

import Link from "next/link";
import styles from "@/styles/NavBarRWD.module.scss";
import PopUp from "./PopUp";

interface INavBarRWDProp {
  burgerClicked: boolean;
}

const NavBarRWD = ({ burgerClicked }: INavBarRWDProp) => {
  return (
    <nav
      className={styles.NavBarRWD}
      style={{
        transform: !burgerClicked ? "translateY(-150%)" : "translateY(0%)",
      }}
    >
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

        <div className={styles.Pages}>
          <Link href="">
            <p>Pages</p>
            <span>{">"}</span>
          </Link>
          <PopUp style={styles} />
        </div>

        <button>Get started</button>
      </div>
    </nav>
  );
};

export default NavBarRWD;
