import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function UserPosts() {
  const posts = useSelector((state) => state.users.posts);
  const hasPosts = posts?.length > 0;

  return (
    <div className="post-list">
      {hasPosts ? List({ posts }) : <p>There is not posts</p>}
      <Link to="/" className="link-back">
        Back
      </Link>
    </div>
  );
}

function List({ posts }) {
  return (
    <ul className="users">
      {posts.map((post) => (
        <li key={post.id} className="user">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
