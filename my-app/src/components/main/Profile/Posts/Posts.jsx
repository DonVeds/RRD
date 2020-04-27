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

const Posts = () => {
  return (
    <div className="Profile-posts">
      <h3>Posts:</h3>
      <div className="Profile-posts_card">
        <Post
          title={postsData[0].title}
          text={postsData[0].text}
          likesCount={postsData[0].likesCount}
        />
        <Post
          title={postsData[1].title}
          text={postsData[1].text}
          likesCount={postsData[1].likesCount}
        />
        <Post
          title={postsData[2].title}
          text={postsData[2].text}
          likesCount={postsData[2].likesCount}
        />
        <Post />
      </div>
    </div>
  );
};

export default Posts; 
