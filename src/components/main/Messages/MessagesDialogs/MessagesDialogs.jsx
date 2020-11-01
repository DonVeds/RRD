import React from "react";
import "./MessagesDialogs.css";
import { NavLink } from "react-router-dom";


const Dialogs = (props) => {

  const DialogsItem = (props) => {
    return (
      <NavLink to={"/messages/" + props.id} className="dialogs-item">
        <img src="/ProfileImg.png" alt="" className="dialogs-item-img"/>
        {props.name}
      </NavLink>
    );
  };

  let dialogsElements = props.dialogs.map((d) => (
    <DialogsItem id={d.id} name={d.name} />
  ));

  return <div className="Messages-dialogs">{dialogsElements}</div>;
}

export default Dialogs;