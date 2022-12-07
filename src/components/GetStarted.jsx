import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-pink-gradient p-[2px] cursor-pointer xs:mr-9`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[20px] leading-[23.4px] mx-auto ">
          <span className="text-gradient">Learn</span>
        </p>
      </div>

      <p className="font-poppins font-medium text-[20px] leading-[23.4px] pr-5 ml-5">
        <span className="text-gradient">More</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
