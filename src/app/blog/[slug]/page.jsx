import Image from "next/image";
import Style from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/14683133/pexels-photo-14683133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={Style.img}
          />
        </div>
        <div className={Style.textContainer}>
          <h1 className={Style.title}>Title</h1>
          <div className={Style.detail}>
            <Image
              src="https://images.pexels.com/photos/14683133/pexels-photo-14683133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={50}
              height={50}
              className={Style.avatar}
            />
            <div className={Style.detailText}>
              <span className={Style.detailTitle}>Author</span>
              <span className={Style.detailValue}>Muhammad Saeed</span>
            </div>
            <div className={Style.detailText}>
              <span className={Style.detailTitle}>Published</span>
              <span className={Style.detailValue}>29.05.2024</span>
            </div>
          </div>
          <div className={Style.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore est
            exercitationem facere minima quia, aliquam harum minus porro cum
            dicta?
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
