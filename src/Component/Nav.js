import React from "react";
import "../Style/main.css";
import { FaMoon } from "react-icons/fa";
import arLogo from '../arLogo.png'; 

function Nav(props) {



  return (
    <div className="Nav">
      <div className="left">
        <div className="image">
          <img src={arLogo}/>
        </div>
        <h1 className="name">Ahmed Mahmoud</h1>
      </div>

      {/* <div className="right">
      <FaMoon className="moon" />

        <button
          class="light-mode-button"
          aria-label="Toggle Light Mode"
          onClick={props.changeMode}
        >
          <span></span>
          <span className={`modeToggle ${props.lightMode==true?"light":""}`}></span>
        </button>
      </div> */}
    </div>
  );
}
export default Nav;
