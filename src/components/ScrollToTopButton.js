import React from "react";

import "../stylesheets/ScrollToTopButton.scss";
import ScrollToTopButtonIcon from "../images/scrollToTopButtonIcon.svg";

function ScrollToTopButton() {
  function scrollUp() {
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0; //for opera, firefox, chrome, IE
  }
  return (
    <div className="scroll-top-button" onClick={() => scrollUp()}>
      <img src={ScrollToTopButtonIcon} alt="scroll to top icon" className="scroll-top-icon"/>
    </div>
  );
}

export default ScrollToTopButton;
