import style from "@/styles/ThirdPart.module.scss";
import Image from "next/image";

const FourthPart = () => {
  return (
    <div>
      <div className={`${style.ThirdPart} ${style.FourthPart}`}>
        <div className={style.Left}>
          <Image
            alt=""
            src="/fourthPartMain.jpeg"
            className={style.Main}
            height={100}
            width={100}
          />
        </div>
        <div className={style.Right}>
          <p className={style.About}>Our Mission</p>

          <p className={style.Our}>
            Our mission is to disrupt the food industry
          </p>

          <p className={style.Sed}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthPart;
