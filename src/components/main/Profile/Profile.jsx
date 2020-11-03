import React from "react";
import "./Profile.css";
import Posts from "./Posts/Posts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import AddNewPost from './AddNewPost/AddNewPost'

const Profile = (props) => {
  return (
    <div className="Profile">
      <ProfileInfo />
      <AddNewPost updateNewPostText={props.updateNewPostText} dispatch={props.dispatch}/>
      <Posts posts={props.profilePageData.posts} newPostText={props.profilePageData.newPostText} dispatch={props.dispatch}/>
    </div>
  );
};

export default Profile;
