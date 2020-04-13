import React from "react";
import Post from "./Post/Post"
import "./Posts.css"

const Posts = () => {
  return (
    <div className="Profile-posts">
      <h3>Posts:</h3>
      <div className="Profile-posts_card">
        <Post title="Greeting" text="Hello to all my friends" />
        <Post title="Weather" text="Today is really cold" />
        <Post />
      </div>
    </div>
  );
};

export default Posts; 
