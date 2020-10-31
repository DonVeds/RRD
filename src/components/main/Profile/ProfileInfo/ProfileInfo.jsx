import React from "react";
import "./ProfileInfo.css"

const ProfileInfo = (props) => {
  return (
    <div className="Profile-info">
      <div className="info-bg">

      </div>
      <div className="info-mainBlock">
        <div className="info-mainBlock-imgBlock">
          <img src="/ProfileImg.png" alt="" className="info-mainBlock-imgBlock-img"/>
        </div>
        <h2 className="info-mainBlock-name">Ariel</h2>
        <p className="info-mainBlock-city">Saint-Petersburg</p>
      </div>
    </div>
  );
};

export default ProfileInfo; 
