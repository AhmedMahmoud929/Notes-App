import React,{useEffect} from "react";
import "../Style/main.css";
import { MdDelete } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { NavLink } from "react-router-dom";
function Note(props) {

  return (
    <div className={`Note ${props.color}`}>
      <div className="top">
        <h1>{props.title}</h1>
        <div className="topIcons">
          <MdDelete className="trash" onClick={props.deleteNote} />
          <NavLink to="/edit">
            <GoPencil className="pen" onClick={()=>props.editNote(props.id)} />
          </NavLink>
        </div>
      </div>
      <div className="middle">{props.content}</div>
      <div className="bottom">
        <div className="time">{props.time}</div>
        <div className="date">{props.date}</div>
      </div>
    </div>
  );
}
export default Note;
