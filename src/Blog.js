import React, { useState, useEffect } from "react";
import  './Blog.css';


const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.tashalegbuna.com")
      .then(response => response.json())
      .then(data => {
        setPosts(data.posts);
      });
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Blog