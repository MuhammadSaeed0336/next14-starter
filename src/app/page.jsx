import Image from "next/image";
import Style from "./home.module.css";
const Home = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.textContainer}>
          <h1 className={Style.title}>Creative Thoughts Agency</h1>
          <p className={Style.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            dolore adipisci eius nulla? Sapiente magnam quia officiis
          </p>
          <div className={Style.buttons}>
            <button className={Style.button}>Learn More</button>
            <button className={Style.button}>Contact</button>
          </div>
          <div className={Style.brands}>
            <Image src="/brands.png" alt="" fill className={Style.brand} />
          </div>
        </div>
        <div className={Style.imgContainer}>
          <Image src="/hero.gif" alt="" fill className={Style.heroImg} />
        </div>
      </div>
    </>
  );
};

export default Home;
