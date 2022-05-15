import React, { useState, useRef, useEffect } from "react";
import "./Style/main.css";
import Nav from "./Component/Nav";
import Aside from "./Component/Aside";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Component/Create";
import Edit from "./Component/Edit";
import Notes from "./Component/Notes";
import Account from "./Component/Account";

function App() {
  // [ STATES ]
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("NotePurple");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState([]);
  const [noteHandler, setNoteHandler] = useState(null);
  const [dones, setDones] = useState([]);
  const [lightMode, setLightMode] = useState(false);
  const [deletedNotes, setDeletedNotes] = useState(0);
  const [complateNotesCounter, setComplateNotesCounter] = useState(0);

  // save in local storage
  useEffect(() => {
    // notes
    if (localStorage.getItem("notes")) {
      setNotes(JSON.parse(localStorage.getItem("notes")));
    } else {
      localStorage.setItem("notes", JSON.stringify([]));
    }
  }, []);

  // to fucken first time
  useEffect(() => {
    saveLocalStorage("notes", notes);
  }, [notes]);

  const saveLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  //  [ FINCTIONS ]
  // ================> MODE <================
  const changeMode = () => {
    setLightMode(!lightMode);
  };
  // ================> TITLE <================
  const saveTitle = (e) => {
    setTitle(e.target.value);
  };

  // ================> CONTENT <================
  const saveContent = (e) => {
    setContent(e.target.value);
    timeFun();
  };
  // time function
  function timeFun() {
    // time & date
    let now = new Date(); // get full date
    // => time
    let hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours(); // get hours
    let minuts =
      now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes(); // get minuts
    let m = hours > 12 ? "am" : "pm"; // get time at the day
    setTime(`${hours}:${minuts} ${m}`);
    // => date
    let year = now.getFullYear(); // get year
    const arrOfMonth = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = arrOfMonth[now.getMonth()]; // get month
    let day = now.getDate(); // get day
    setDate(`${day} ${month} ${year}`);
  }
  // ================> ADD NOTES <================
  const addNote = (e) => {
    if (title != "" && content != "") {
      timeFun();

      // get note info
      let newnote = {
        id: new Date(),
        color: color,
        title: title,
        content: content,
        time: time,
        date: date,
      };

      // add note & set inputs
      setNotes([...notes, newnote]);
      setTitle("");
      setContent("");
      setNoteHandler(null);
    }
  };

  // ================> DELETE NOTE <================
  const deleteNote = (index) => {
    notes.splice(index, 1);
    setNotes([...notes]);
    setDeletedNotes(deletedNotes + 1);
    saveLocalStorage("notes", notes);
  };

  // ================> EDIT NOTE <================

  const editNote = (index) => {
    let done = notes[index];
    setDones([...dones, done]);
    notes.splice(index, 1);
    setNotes([...notes]);
  };
  const returnNote = (index) => {
    let notDone = dones[index];
    setNotes([...notes, notDone]);
    dones.splice(index, 1);
    setDones([...dones]);
    saveLocalStorage("notes", notes);
  };

  // ================> COLOR <================
  const returnClassColor = (e) => {
    setColor(e);
  };

  return (
    <div>
      <div className="mobilePage">
        <h1>Please<br></br>open<br></br>it in<br></br>desktop</h1>
      </div>
      <div className="app">
        <Nav changeMode={changeMode} lightMode={lightMode} />

        <div className="bottom">
          <Aside />

          <div className="preview">
            <Routes>
              <Route
                path="/Notes-App/create/*"
                element={
                  <Create
                    title={title}
                    content={content}
                    btnColor={color}
                    saveTitle={saveTitle}
                    saveContent={saveContent}
                    addNote={addNote}
                    returnClassColor={returnClassColor}
                  />
                }
              />
              <Route
                path="/Notes-App/edit"
                element={<Edit doneNotes={dones} returnNote={returnNote} />}
              />
              <Route
                path="/Notes-App/notes"
                element={
                  <Notes
                    notes={notes}
                    deleteNote={deleteNote}
                    editNote={editNote}
                  />
                }
              />
              <Route
                path="/Notes-App/account"
                element={
                  <Account
                    AllNotesCounter={notes.length}
                    complatedNotes={dones.length}
                    deletedNotes={deletedNotes}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
