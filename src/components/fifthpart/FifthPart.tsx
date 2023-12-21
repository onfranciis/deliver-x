import style from "@/styles/FifthPart.module.scss";
import FifthPartCard, { FifthPartCardProps } from "./FifthPartCard";
import Link from "next/link";

const FifthPart = () => {
  return (
    <div className={`${style.FifthPart}`}>
      <div className={style.Left}>
        <p className={style.About}>Our Journey</p>

        <p className={style.Our}>It has been a long but incredible journey</p>

        <p className={style.Sed}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
          egestas morbi sem vulputate etiam facilisis pellentesque ut quis.
        </p>

        <Link href="">
          <button className={style.Download}>Download app</button>
        </Link>
      </div>

      <div className={style.Right}>
        {Data.map((card) => (
          <FifthPartCard Data={card} key={card.title} />
        ))}
      </div>
    </div>
  );
};

export default FifthPart;

const Data: FifthPartCardProps["Data"][] = [
  {
    subTitle: "2016",
    title: "Deliver X was founded",
    main: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.",
  },

  {
    subTitle: "2018",
    title: "Raised Series A at $50M valuation",
    main: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.",
  },
  {
    subTitle: "2019",
    title: "Raised Series B at $600M valuation",
    main: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.",
  },
  {
    subTitle: "2022",
    title: "Raised Series C at $3B valuation",
    main: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.",
  },
];
