import style from "@/styles/SixthPart.module.scss";
import Image from "next/image";

const SixthPart = () => {
  return (
    <div className={style.SixthPart}>
      <div className={style.Left}>
        <p className={style.About}>Our Partners</p>

        <p className={style.Our}>
          We don’t walk alone, Deliver X works thanks to our partners
        </p>

        <p className={style.Sed}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
          egestas morbi sem vulputate etiam facilisis pellentesque ut quis.
        </p>
      </div>

      <div className={style.Right}>
        <div className={style.Card}>
          <Image
            alt=""
            src="/avatar.svg"
            className={style.Main}
            height={100}
            width={100}
          />

          <p className={style.Title}>Customers</p>

          <p className={style.Sub}>
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
        </div>

        <div className={style.Card}>
          <Image
            alt=""
            src="/shop.svg"
            className={style.Main}
            height={100}
            width={100}
          />

          <p className={style.Title}>Restaurants</p>

          <p className={style.Sub}>
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
        </div>

        <div className={style.Card}>
          <Image
            alt=""
            src="/bike.svg"
            className={style.Main}
            height={100}
            width={100}
          />

          <p className={style.Title}>Riders</p>

          <p className={style.Sub}>
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SixthPart;
