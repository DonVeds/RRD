import React from "react";
import "./Profile.css";
import Posts from "./Posts/Posts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import AddNewPost from './AddNewPost/AddNewPost'

const Profile = (props) => {
  return (
    <div className="Profile">
      <ProfileInfo />
      <AddNewPost updateNewPostText={props.updateNewPostText} addPost={props.addPost} newPostText={props.profilePageData.newPostText}/>
      <Posts posts={props.profilePageData.posts} newPostText={props.profilePageData.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};

export default Profile;
