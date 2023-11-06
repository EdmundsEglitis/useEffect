import { useEffect, useState } from "react";
import User from './User.js';

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    }
    getPosts();
  }, []);

  function renderPosts() {
    if (loading) {
      return <p>Loading...</p>;
    }
    return posts.map((post) => (
      <div key={post.id}>
        <p>Post ID: {post.id}</p>
        <p>Title: {post.title}</p>
        <p>Body: {post.body}</p>
        <h2>.</h2>
      </div>
    ));
  }

  return(
    <>
    {renderPosts()}
    </>
  );

  }
export default Post;