import Image from "next/image";
import Style from "./about.module.css";

const AboutPage = () => {
  return (
    <>
      <div className={Style.imgContainer}>
        <Image src="/about.png" alt="" fill />
      </div>
    </>
  );
};

export default AboutPage;
