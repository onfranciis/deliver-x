import Image from "next/image";
import styles from "@/styles/EightPart.module.scss";

const EightPart = () => {
  return (
    <div>
      <div className={styles.EightPart}>
        <div className={styles.Left}>
          <Image
            src="/logo.svg"
            alt=""
            height={100}
            width={100}
            className={styles.Logo}
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>

        <div className={styles.Links}>
          <button>
            <Image
              src="/apple.svg"
              alt=""
              height={40}
              width={40}
              className={styles.Logo}
            />
            <p>Download for iOS</p>
          </button>

          <button>
            <Image
              src="/android.svg"
              alt=""
              height={40}
              width={40}
              className={styles.Logo}
            />
            <p>Download for Android</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EightPart;
