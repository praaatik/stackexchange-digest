import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="home">Home</div>
      </Link>
    </div>
  );
}

export default Navbar;
