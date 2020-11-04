import React, { useState } from "react";

import Moon from "../images/moon.svg";
import Sun from "../images/sun.svg";

import "../stylesheets/Themer.scss";
function Themer(props) {
  return (
    <div className="themer" onClick={() => props.clicked()}>
      <img
        src={props.currentTheme === "light" ? Moon : Sun}
        alt="theme button"
      ></img>
    </div>
  );
}

export default Themer;
