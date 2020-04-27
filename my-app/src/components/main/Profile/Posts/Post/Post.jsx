import React from "react";
import "./Post.css"

const Post = (post) => {
  return (
    <div className="Profile-posts-post">
      <p><b>{post.title || "Title"}</b></p>
      <p>{post.text || "Text"}</p>
      <p>Likes: {post.likesCount}</p>

  <p>Best regards, {"your dear friend"}</p>
    </div>
  );
};

export default Post; 
