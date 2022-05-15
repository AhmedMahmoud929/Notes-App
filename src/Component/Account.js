import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import arLogo from '../arLogo.png';


function Account(props) {
  return (
    <div className="Account">
      <div className="info">
        <div className="profile">
          <img src={arLogo}/>
        </div>
        <div className="name">Ahmed Mahmoud</div>
        <div className="rate">Challenger</div>
        <div className="level">
          <div className="main">
            <div className="progress"></div>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="cr">
          <FaClipboardList className="icon"/>
          <h1>All Notes</h1>
          <h2>{props.AllNotesCounter}</h2>
        </div>
        <div className="cr">
          <MdFileDownloadDone className="icon"/>
          <h1>Finished Notes</h1>
          <h2>{props.complatedNotes}</h2>
        </div>
        <div className="cr">
          <BiTrash className="icon"/>
          <h1>Deleted Notes</h1>
          <h2>{props.deletedNotes}</h2>
        </div>
      </div>
    </div>
  );
}
export default Account;
