import PostCard from "@/components/postCard/postCard";
import Style from "./blog.module.css";

const BlogPage = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.post}>
          <PostCard />
        </div>
        <div className={Style.post}>
          <PostCard />
        </div>
        <div className={Style.post}>
          <PostCard />
        </div>
        <div className={Style.post}>
          <PostCard />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
