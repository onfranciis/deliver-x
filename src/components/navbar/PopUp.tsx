import styles from "@/styles/NavBar.module.scss";
import Menu from "../ninthpart/Menu";
import Utility from "../ninthpart/Utility";

const PopUp = ({ style = styles }: { style?: typeof styles }) => {
  return (
    <div className={style.PopUp}>
      <Menu />
      <Utility />
    </div>
  );
};

export default PopUp;
