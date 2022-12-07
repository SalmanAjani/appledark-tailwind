import { about } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { FaStar } from "react-icons/fa";

const AboutCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== about.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-darkpink-gradient`}
    >
      <FaStar color="white" size="28px" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const About = () => (
  <section id="about" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} md:pt-14`}>
        You do the Buying, <br className="sm:block hidden" /> we’ll handle the
        rest.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our products comply with the European Union Directive and its
        amendments, including exemptions for the use of lead.
        <br />
        <br />
        We are working to phase out the use of these exempted substances where
        technically possible.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {about.map((about, index) => (
        <AboutCard key={about.id} {...about} index={index} />
      ))}
    </div>
  </section>
);

export default About;
