import React from "react";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Edit(props) {
  let doneNotesArr = props.doneNotes;
  if (doneNotesArr.length==0){
    return <div className="nullMsg">You Haven't Done Any Notes</div>
  }
  return (
    <div className="container-notes">
      {doneNotesArr.map((item, index) => {
        return (
          <div className={`Note ${item.color}`}>
            <div className="doneNote">
              <h1>You have finished<br></br>this note</h1>
              <NavLink
              to="/notes"
              className={`backNoteBtn ${item.color}`}
              onClick={() => props.returnNote(index)}
              >Back Up</NavLink>
            </div>
            <div className="top">
              <h1>{item.title}</h1>
              <div className="topIcons">
                <MdDelete
                  className="trash"
                  onClick={() => props.deleteNote(index)}
                />
              </div>
            </div>
            <div className="middle">{item.content}</div>
            <div className="bottom">
              <div className="time">{item.time}</div>
              <div className="date">{item.date}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Edit;
