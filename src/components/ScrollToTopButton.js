import React from "react";
import "../stylesheets/ScrollToTopButton.scss";

function ScrollToTopButton() {
  function scrollUp() {
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0; //for opera, firefox, chrome, IE
  }
  return (
    <div className="scroll-top-button" onClick={() => scrollUp()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="scroll-top-icon"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
      </svg>
    </div>
  );
}

export default ScrollToTopButton;
