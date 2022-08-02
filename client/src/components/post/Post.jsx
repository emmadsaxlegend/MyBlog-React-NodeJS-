import { Link } from "react-router-dom";
import "./post.css";


export default function Post({post}) {
  const myDate = new Date(post.createdAt).toDateString();
  const PF ="http://localhost:5000/images/"
  return (
    <div className="post">
      {post.photo && (
      <img
        className="postImg"
        src={PF + post.photo}
        alt=""
      />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) =>(
            <span className="postCat" key={post._id}>
            <Link className="link" to="/posts?cat=Music">
              {c.name}
            </Link>
          </span>
          ))}
          
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{myDate}</span>
      </div>
      <p className="postDesc">
       {post.desc}
      </p>
    </div>
  );
}
