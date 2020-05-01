import React from "react";
import Post from "./Post/Post"
import "./Posts.css"


const Posts = (props) => {

  let postsData = props.posts

  let postsElements = postsData.map((p) => (
    <Post
      title={ p.title }
      text={ p.text }
      likesCount={ p.likesCount }
    />
  
  ));

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
