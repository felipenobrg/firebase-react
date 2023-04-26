import { Heart } from "phosphor-react";
import { Post as IPost } from "./index";
import "./post.css";

interface Props {
  post: IPost;
}

export const Post = (props: Props) => {
  const { post } = props;
  return (
    <div className="posts-container">
      <div className="posts">
      <header>
        <h1 className="title-h1">{post.title}</h1>
      </header>
      <section className="section-posts">
        <div>
          <p>{post.description}</p>
        </div>
      </section>
      <footer>
        <p> @{post.username} </p>
        <button><Heart /></button>
      </footer>
      </div>
    </div>
  );
};
