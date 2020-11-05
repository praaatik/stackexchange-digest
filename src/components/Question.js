import React from "react";
import "../stylesheets/Question.scss";

function Question(props) {
  return (
    <div className="question">
      <a href={props.link} target="_blank" rel="noreferrer" className={"title"}>
        <div
          dangerouslySetInnerHTML={{ __html: props.title }}
          className={props.answerCount === 0 ? "no-answer" : "answer"}
        ></div>
      </a>
    </div>
  );
}

export default Question;
