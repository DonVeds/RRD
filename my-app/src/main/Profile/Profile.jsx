import React from "react";
import "./Profile.css";
import Posts from "./Posts/Posts"

const Profile = () => {
  return (
    <div className="Profile">
      <img
        className="Profile-backGroundImg"
        src="https://cdn5.vectorstock.com/i/1000x1000/32/14/abstract-isolated-emoji-background-icons-vector-18893214.jpg"
        alt=""
        srcset=""
      />
      <img
        className="Profile-img"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/237/family-man-man-boy_1f468-200d-1f468-200d-1f466.png"
        alt=""
        srcset=""
      />
      <h2 className="Profile-name">Name</h2>
      <div className="Profile-about">
        <ul>
          <li>Age: 25</li>
          <li>City: Saint-Petersburg</li>
        </ul>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
