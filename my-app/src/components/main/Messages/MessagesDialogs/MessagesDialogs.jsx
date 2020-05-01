import React from "react";
// import "./Messages.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  return (
    <NavLink to={"/messages/" + props.id} className="dialogs-item">
      {props.name}
    </NavLink>
  );
};

let dialogsData = [
  { id: "1", name: "Misha" },
  { id: "2", name: "Masha" },
  { id: "3", name: "Mosha" },
  { id: "4", name: "Musha" },
  { id: "5", name: "Mesha" },
];

let dialogsElements = dialogsData.map((d) => (
  <DialogsItem id={d.id} name={d.name} />
));

const Dialogs = () => {
  return <div className="Messages-dialogs">{dialogsElements}</div>;
}

export default Dialogs;