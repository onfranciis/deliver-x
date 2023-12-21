import style from "@/styles/SecondPart.module.scss";

const SecondPart = () => {
  return (
    <div className={style.SecondPart}>
      <div className={style.Stat}>
        <p className={style.Main}>
          10M<span>+</span>
        </p>
        <p className={style.Sub}>Happy customers</p>
      </div>

      <div className={style.Stat}>
        <p className={style.Main}>
          500K<span>+</span>
        </p>
        <p className={style.Sub}>Restaurants available</p>
      </div>

      <div className={style.Stat}>
        <p className={style.Main}>
          30M<span>+</span>
        </p>
        <p className={style.Sub}>Successful deliveries</p>
      </div>

      <div className={style.Stat}>
        <p className={style.Main}>
          99.9<span>%</span>
        </p>
        <p className={style.Sub}>Customer satisfaction</p>
      </div>
    </div>
  );
};

export default SecondPart;
