import React from "react";
import "../Style/main.css";
import { NavLink } from "react-router-dom";
import { FaClipboardList,FaUser } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

function Aside() {
  return (
    <div className="Aside">
      <ul>
        <li>
          <NavLink to="/Notes-App/create">
      <AiFillPlusCircle/>
            Create
          </NavLink>
        </li>
        <li>
          <NavLink to="/Notes-App/notes">
          <FaClipboardList className="noteIcon" />
          Notes
          </NavLink>
        </li>
        <li>
          <NavLink to="/Notes-App/edit">
            <AiOutlineFileDone className="editIcon"/>
            Done
            </NavLink>
        </li>
        <li>
        
          <NavLink to="/Notes-App/account">
          <FaUser/>
          Account</NavLink>
        </li>
      </ul>

      <a href="" className="log-out">
        Logout
      </a>
    </div>
  );
}
export default Aside;
