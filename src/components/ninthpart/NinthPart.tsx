import Menu from "./Menu";
import styles from "@/styles/NinthPart.module.scss";
import Utility from "./Utility";
import Available from "./Available";

const NinthPart = () => {
  return (
    <div>
      <div className={styles.NinthPart}>
        <Menu />
        <Utility />
        <Available />
      </div>
    </div>
  );
};

export default NinthPart;
