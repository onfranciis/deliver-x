import Image from "next/image";
import styles from "@/styles/page.module.scss";
import NavBar from "@/components/navbar/NavBar";

export default function Home() {
  return (
    <main className={styles.Page}>
      <NavBar />
    </main>
  );
}
