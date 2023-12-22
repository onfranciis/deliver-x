import styles from "@/styles/NavBar.module.scss";
import Menu from "../ninthpart/Menu";
import Utility from "../ninthpart/Utility";

const PopUp = () => {
  return (
    <div className={styles.PopUp}>
      <Menu />
      <Utility />
    </div>
  );
};

export default PopUp;
