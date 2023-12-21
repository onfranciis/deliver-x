import style from "@/styles/SeventhPart.module.scss";
import SeventhPartCard, { ISeventhPartCardProps } from "./SeventhPartCard";

const SeventhPart = () => {
  return (
    <div className={style.Parent}>
      <div className={style.SeventhPart}>
        <div className={style.Left}>
          <p className={style.About}>PRESS & NEWS</p>

          <p className={style.Our}>See what the press says about Deliver X</p>
        </div>

        <div className={style.Right}>
          {DATA.map((card) => (
            <SeventhPartCard Data={card} key={card.date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeventhPart;

const DATA: ISeventhPartCardProps["Data"][] = [
  {
    image: "l1.svg",
    title: "Deliver X raises $26M in series B funding for growth",
    date: "January 22, 2023",
  },
  {
    image: "l2.svg",
    title: "Deliver X claims to be the #1 player in the delivery industry",
    date: "Nov 15, 2022",
  },
  {
    image: "l3.svg",
    title: "Introducing curbside ordering with Deliver X",
    date: "Sep 18, 2022",
  },
  {
    image: "l4.svg",
    title: "Introducing the Square POS integration with Deliver X",
    date: "Mar 12, 2022",
  },
];
