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
          <NavLink to="/create">
      <AiFillPlusCircle/>
            Create
          </NavLink>
        </li>
        <li>
          <NavLink to="/notes">
          <FaClipboardList className="noteIcon" />
          Notes
          </NavLink>
        </li>
        <li>
          <NavLink to="/edit">
            <AiOutlineFileDone className="editIcon"/>
            Done
            </NavLink>
        </li>
        <li>
        
          <NavLink to="/account">
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
