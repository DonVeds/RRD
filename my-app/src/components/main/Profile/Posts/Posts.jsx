import React from "react";
import Post from "./Post/Post"
import "./Posts.css"

let postsData = [
  { id: "1", title: "Misha", text: "Hello to all my friends", likesCount: "12" },
  { id: "2", title: "Masha", text: "Today is really cold", likesCount: "11" },
  { id: "3", title: "test post", text: "post", likesCount: "10" },
  { id: "4", title: "test post", text: "post", likesCount: "10" },
  { id: "5", title: "test post", text: "post", likesCount: "10" },
];

let postsElements = postsData.map((p) => (
  <Post
    title={ p.title }
    text={ p.text }
    likesCount={ p.likesCount }
  />
));

const Posts = () => {
  return (
    <div className="Profile-posts">
      <h3>Posts:</h3>
      <div className="Profile-posts_card">
        { postsElements }
      </div>
    </div>
  );
};

export default Posts; 
