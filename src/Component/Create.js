import React from "react";
import "../Style/main.css";
import { NavLink } from "react-router-dom";

function Create(props) {
  if ( props.editing == true) {
    return <div className="nullMsg">Please get out of the editing mode</div>;
  } else {
    return (
      <div className="Create">
        <form className="inputs">
          <input
            className="title"
            type="text"
            placeholder="Title"
            onChange={props.saveTitle}
            value={props.title}
          />

          <textarea
            className="content"
            placeholder="Content"
            onChange={props.saveContent}
            value={props.content}
          />
          <NavLink
            to="/notes"
            className={`btn ${props.btnColor}`}
            onClick={props.addNote}
          >
            ADD
          </NavLink>
        </form>
        <ul className="color">
          <li
            className="clr NotePurple"
            onClick={() => props.returnClassColor("NotePurple")}
          ></li>
          <li
            className="clr NoteBlue"
            onClick={() => props.returnClassColor("NoteBlue")}
          ></li>
          <li
            className="clr NoteRed"
            onClick={() => props.returnClassColor("NoteRed")}
          ></li>
          <li
            className="clr NoteOrange"
            onClick={() => props.returnClassColor("NoteOrange")}
          ></li>
        </ul>
      </div>
    );
  }
  }


export default Create;
