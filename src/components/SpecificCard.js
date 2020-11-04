import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import "../stylesheets/SpecificCard.scss";

import ViewDark from "../images/view-dark.svg";
import QuestionDark from "../images/question-dark.svg";
import ViewLight from "../images/view-light.svg";
import QuestionLight from "../images/question-light.svg";

import ScrollToTopButton from "./ScrollToTopButton";

// function SpecificCard(props) {
//   console.log(props.match.params.id);
//   return <div>Hey</div>;
// }

function SpecificCard(props) {
  console.log(props.theme);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const parentRef = useRef(null);

  const siteName = props.match.params.id;
  const URL = `https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=${siteName}&filter=!LaSRLvM3aoFvP_FHtdS2mM`;

  const fetchData = () => {
    axios.get(URL).then((response) => {
      response.data.items.map((d, index) => {
        setData((data) =>
          data.concat({
            title: d.title,
            link: d.link,
            questionId: d.question_id,
            creationDate: d.creation_date,
            isAnswered: d.is_answered,
            viewCount: d.view_count,
            answerCount: d.answer_count,
            tags: d.tags,
            ownerName: d.owner.display_name,
            ownerProfileLink: d.owner.link,
            ownerProfilePhoto: d.owner.profile_image,
          })
        );
      });
    });
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
    // setTimeout(() => {
    //   const parentRefNode = parentRef.current;
    //   console.log(parentRefNode.classList);
    //   parentRefNode.classList.add("light");
    // }, 10000);
  }, []);

  return (
    <div className="question-card--parent" id="parent" ref={parentRef}>
      {console.log(`Loading is: ${loading}`)}
      {data.map((d, index) => {
        return (
          <div className="question-card">
            <div className="question">
              <a
                href={d.link}
                target="_blank"
                rel="noreferrer"
                className={"title"}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: d.title }}
                  className={d.answerCount === 0 ? "no-answer" : "answer"}
                ></div>
              </a>
            </div>
            <div className="tag-holder">
              {d.tags.map((tag) => {
                return <div className="tags">{tag}</div>;
              })}
            </div>
            <div className="meta-data">
              <div className="meta-data--left">
                <div className="view-count">
                  <img
                    src={props.theme === "dark" ? ViewLight : ViewDark}
                    alt="view icon"
                  ></img>
                  <span>{d.viewCount}</span>
                </div>
                <div className="answer-count">
                  <img
                    src={props.theme === "dark" ? QuestionLight : QuestionDark}
                    alt="question icon"
                  ></img>
                  <span>{d.answerCount}</span>
                </div>
              </div>
              <a href={d.ownerProfileLink} target="_blank" rel="noreferrer">
                <div className="meta-data--right">
                  <img src={d.ownerProfilePhoto} alt={d.ownerName} />
                  <p dangerouslySetInnerHTML={{ __html: d.ownerName }}></p>
                </div>
              </a>
            </div>
            <span className="index">{index + 1}</span>
          </div>
        );
      })}

      <ScrollToTopButton />
    </div>
  );
}

export default SpecificCard;
