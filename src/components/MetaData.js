import React from "react";

import ViewDark from "../images/view-dark.svg";
import QuestionDark from "../images/question-dark.svg";
import ViewLight from "../images/view-light.svg";
import QuestionLight from "../images/question-light.svg";

import "../stylesheets/MetaData.scss";

function MetaData(props) {
  return (
    <div className="meta-data">
      <div className="meta-data--left">
        <div className="view-count">
          <img
            src={props.theme === "dark" ? ViewLight : ViewDark}
            alt="view icon"
          ></img>
          <span>{props.viewCount}</span>
        </div>
        <div className="answer-count">
          <img
            src={props.theme === "dark" ? QuestionLight : QuestionDark}
            alt="question icon"
          ></img>
          <span>{props.answerCount}</span>
        </div>
      </div>
      <a href={props.ownerProfileLink} target="_blank" rel="noreferrer">
        <div className="meta-data--right">
          <img src={props.ownerProfilePhoto} alt={props.ownerName} />
          <p dangerouslySetInnerHTML={{ __html: props.ownerName }}></p>
        </div>
      </a>
    </div>
  );
}

export default MetaData;
