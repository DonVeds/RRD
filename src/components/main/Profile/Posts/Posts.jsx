import React from 'react';
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

  let newPostElement = React.useRef(null);

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className="Profile-posts">
      <h3>My posts</h3>
      <div className="Profile-posts_new">
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} cols="30" rows="5" />
        <button onClick={ addPost }>Add new post</button>
      </div>
      <div className="Profile-posts_card">
        { postsElements }
      </div>
    </div>
  );
};

export default Posts; 
