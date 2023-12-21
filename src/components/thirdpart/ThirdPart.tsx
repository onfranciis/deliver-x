import style from "@/styles/ThirdPart.module.scss";
import Image from "next/image";

const ThirdPart = () => {
  return (
    <div className={style.ThirdPart}>
      <div className={style.Left}>
        <Image
          alt=""
          src="/thirdPartMain.jpeg"
          className={style.Main}
          height={100}
          width={100}
        />
      </div>
      <div className={style.Right}>
        <p className={style.About}>About Deliver X</p>

        <p className={style.Our}>Our company started back in 2016</p>

        <p className={style.Sed}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur.
        </p>
      </div>
    </div>
  );
};

export default ThirdPart;
