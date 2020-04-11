import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
      <img className="Profile-backGroundImg" src="" alt="" srcset="" />
      <img
        className="Profile-img"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/male-technologist_1f468-200d-1f4bb.png"
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
      <div className="Profile-posts">
        Posts
      </div>
    </div>
  );
};

export default Profile;
