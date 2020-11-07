import React from "react";
import Github from "../images/github-icon.svg";
import "../stylesheets/Footer.scss";

function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/praaatik/stackexchange-digest"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="Github repository link" />
      </a>
    </footer>
  );
}

export default Footer;
