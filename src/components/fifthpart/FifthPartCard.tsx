import style from "@/styles/FifthPart.module.scss";

export interface FifthPartCardProps {
  Data: {
    subTitle: string;
    title: string;
    main: string;
  };
}

const FifthPartCard = ({ Data }: FifthPartCardProps) => {
  return (
    <div className={`${style.FifthPartCard}`}>
      <p className={style.About}>{Data.subTitle}</p>

      <p className={style.Our}>{Data.title}</p>

      <p className={style.Sed}>{Data.main}</p>
    </div>
  );
};

export default FifthPartCard;
