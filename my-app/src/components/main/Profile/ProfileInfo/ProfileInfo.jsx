import React from "react";
import "./ProfileInfo.css"

const ProfileInfo = (props) => {
  return (
    <div className="Profile-info">
      <img
        className="info-backGroundImg"
        src="https://cdn5.vectorstock.com/i/1000x1000/32/14/abstract-isolated-emoji-background-icons-vector-18893214.jpg"
        alt=""
        srcSet=""
      />
      <img
        className="info-img"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/237/family-man-man-boy_1f468-200d-1f468-200d-1f466.png"
        alt=""
        srcSet=""
      />
      <h2 className="info-name">Name</h2>
      <div className="info-about">
        <ul>
          <li>Age: 25</li>
          <li>City: Saint-Petersburg</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo; 
