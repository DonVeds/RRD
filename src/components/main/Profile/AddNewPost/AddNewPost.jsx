import React from "react";
import "./AddNewPost.css";

const AddNewPost = (props) => {

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
    <div className="Profile">
      <div className="Profile-posts_new">
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} cols="30" rows="5" />
        <button onClick={ addPost }>Add new post</button>
      </div>
    </div>
  );
};

export default AddNewPost