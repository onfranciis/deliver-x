"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/NavBar.module.scss";
import PopUp from "./PopUp";
import { useState } from "react";
import NavBarRWD from "./NavBarRWD";

const NavBar = () => {
  const [burgerClicked, setBurgerClicked] = useState(false);

  return (
    <div className={styles.Parent}>
      <nav className={styles.NavBar}>
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
          <div className={styles.Pages}>
            <Link href="">
              <p>Pages</p>
              <span>{">"}</span>
            </Link>
            <PopUp />
          </div>

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

            <div
              className={`${styles.Burger} ${burgerClicked && styles.Selected}`}
              onClick={() => setBurgerClicked((data) => !data)}
            >
              <span className={styles.One}></span>
              <span className={styles.Two}></span>
            </div>
          </div>
        </div>
      </nav>

      <NavBarRWD burgerClicked={burgerClicked} />
    </div>
  );
};

export default NavBar;
