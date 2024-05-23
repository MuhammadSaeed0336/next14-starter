import Image from "next/image";
import Style from "./about.module.css";

const AboutPage = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.textContainer}>
          <h2 className={Style.subTitle}>About Agency</h2>
          <h1 className={Style.title}>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className={Style.desc}>
            We create digital ideas that are bigger, bolder, braver and better.
            We believe in good ideas flexibility and precission We’re world’s
            Our Special Team best consulting & finance solution provider. Wide
            range of web and software development services.
          </p>

          <div className={Style.boxes}>
            <div className={Style.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={Style.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={Style.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
          </div>
        </div>
        <div className={Style.imgContainer}>
          <Image
            src="/about.png"
            alt="About Image"
            fill
            className={Style.img}
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
