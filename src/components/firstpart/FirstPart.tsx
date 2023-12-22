import style from "@/styles/FirstPart.module.scss";
import Image from "next/image";

const FirstPart = () => {
  return (
    <div className={style.Parent}>
      <div className={style.FirstPart}>
        <div className={style.Left}>
          <p className={style.About}>About Deliver X</p>

          <p className={style.We}>
            We are here to help amazing restaurants get great customers
          </p>

          <p className={style.At}>
            At morbi adipiscing sit sed consectetur senectus Dignissim sed amet
            tincidunt vitae ultricies ultrices amet fermentum amet neque et id
            sed lacinia massa pretium aliquam libero et.
          </p>
        </div>

        <div className={style.Right}>
          <Image
            alt=""
            src="/firstPartMain.png"
            className={style.Main}
            height={100}
            width={100}
            quality={100}
          />
          <Image
            alt=""
            src="/firstPartDupler.png"
            className={style.Dupler}
            height={100}
            width={100}
          />
          <Image
            alt=""
            src="/firstPartDelivery.svg"
            className={style.Delivery}
            height={100}
            width={100}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
