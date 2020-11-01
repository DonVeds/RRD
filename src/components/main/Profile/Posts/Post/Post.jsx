import React from "react";
import "./Post.css"

const Post = (post) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src="/ProfileImg.png" alt="" className="post-header-img"/>
        <p className="post-header-name"><b>Ariel</b></p>
        <p className="post-header-date">{post.date || "Outside the timeline"}</p>
      </div>
      <p className="post-text">{post.text || "Text"}</p>
      <div className="post-likes">
        <img src="/svg/heart.svg" alt="" srcset="" className="post-likes-img"/>
        <p className="post-likes-count">{post.likesCount}</p>
      </div>
    </div>
  );
};

export default Post; 
