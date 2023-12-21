import styles from "@/styles/page.module.scss";
import NavBar from "@/components/navbar/NavBar";
import FirstPart from "@/components/firstpart/FirstPart";
import SecondPart from "@/components/secondpart/SecondPart";
import ThirdPart from "@/components/thirdpart/ThirdPart";
import FourthPart from "@/components/fourthpart/FourthPart";
import FifthPart from "@/components/fifthpart/FifthPart";
import SixthPart from "@/components/sixthpart/SixthPart";
import SeventhPart from "@/components/seventhpart/SeventhPart";

export default function Home() {
  return (
    <main className={styles.Page}>
      <NavBar />

      <div className={styles.ExcludeNav}>
        <FirstPart />
        <SecondPart />
        <ThirdPart />
        <FourthPart />
        <FifthPart />
        <SixthPart />
        <SeventhPart />
      </div>
    </main>
  );
}
