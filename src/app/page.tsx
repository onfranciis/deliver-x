import Image from "next/image";
import styles from "@/styles/page.module.scss";
import NavBar from "@/components/navbar/NavBar";
import FirstPart from "@/components/firstpart/FirstPart";
import SecondPart from "@/components/secondpart/SecondPart";

export default function Home() {
  return (
    <main className={styles.Page}>
      <NavBar />

      <div className={styles.ExcludeNav}>
        <FirstPart />
        <SecondPart />
      </div>
    </main>
  );
}
