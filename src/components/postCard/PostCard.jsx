import Image from "next/image";
import Style from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.top}>
          <div className={Style.imgContainer}>
            <Image
              src="https://images.pexels.com/photos/14683133/pexels-photo-14683133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              className={Style.img}
            />
          </div>
          <span className={Style.date}>28.05.2024</span>
        </div>
        <div className={Style.bottom}>
          <h1 className={Style.title}>Title</h1>
          <p className={Style.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cupiditate, asperiores! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cupiditate, asperiores!
          </p>
          <Link className={Style.link} href="/blog/post/">READ MORE</Link>
        </div>
      </div>
    </>
  );
};

export default PostCard;
