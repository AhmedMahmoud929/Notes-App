import React from "react";
import Note from "../Component/Note";
import "../Style/main.css";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

function Notes(props) {
  let arrOfObjects = props.notes; // =======> [{}]
  if (arrOfObjects.length==0){
    return <div className="nullMsg">Please Add a Note</div>
  }
  return (
    <div className="container-notes">
      {arrOfObjects.map((item, index) => {
        return (
          <div className={`Note ${item.color} `}>
            <div className="top">
              <h1>{item.title}</h1>
              <div className="topIcons">
                <MdDelete
                  className="trash"
                  onClick={() => props.deleteNote(index)}
                />
               
                  <IoMdDoneAll
                    className="pen"
                    onClick={() => props.editNote(index)}
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

export default Notes;
