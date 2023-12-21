import Image from "next/image";
import styles from "@/styles/page.module.scss";
import NavBar from "@/components/navbar/NavBar";
import FirstPart from "@/components/firstpart/FirstPart";

export default function Home() {
  return (
    <main className={styles.Page}>
      <NavBar />

      <div className={styles.ExcludeNav}>
        <FirstPart />
      </div>
    </main>
  );
}
