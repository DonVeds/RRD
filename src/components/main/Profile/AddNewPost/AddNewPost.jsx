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
    <div className="Profile-addNewPost">
      <input type="text" className="Profile-addNewPost-input" ref={newPostElement} onChange={onPostChange} value={props.newPostText} placeholder="Add a post..." cols="30" rows="5" />
      <button className="Profile-addNewPost-btn" onClick={ addPost }>Add </button>
    </div>
  );
};

export default AddNewPost