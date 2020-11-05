//libraries
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

//stylesheets
import "../stylesheets/SpecificCard.scss";

//components
import ScrollToTopButton from "./ScrollToTopButton";
import Question from "./Question";
import MetaData from "./MetaData";

function SpecificCard(props) {
  // console.log(props.theme);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const siteName = props.match.params.id;
  const URL = `https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=${siteName}&filter=!LaSRLvM3aoFvP_FHtdS2mM`;

  const history = useHistory();

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

  //The below function will push in history the siteName and the path.
  //Sitename and tagname are collectively used to fetch the data from the API.
  //Look in the definition of the Route in App.js, line number 88 (at the time of writing)
  //Refer - https://stackoverflow.com/a/60809812/6438526
  function handleTagClick(tagName) {
    let path = `/specific/tag/${tagName}`;
    history.push({ pathname: path, siteName: siteName });
  }

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  return (
    <div className="question-card--parent" id="parent">
      {/* {console.log(`Loading is: ${loading}`)} */}
      {data.map((d, index) => {
        return (
          <div className="question-card">
            {/* one */}
            <Question
              link={d.link}
              title={d.title}
              answerCount={props.answerCount}
            />
            {/* <div className="question">
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
            </div> */}
            {/* two */}

            <div className="tag-holder">
              {d.tags.map((tag) => {
                return (
                  <div className="tags" onClick={() => handleTagClick(tag)}>
                    {tag}
                  </div>
                );
              })}
            </div>

            {/* three */}

            <MetaData
              theme={d.theme}
              viewCount={d.viewCount}
              answerCount={d.answerCount}
              ownerProfileLink={d.ownerProfileLink}
              ownerProfilePhoto={d.ownerProfilePhoto}
              ownerName={d.ownerName}
            />
            {/* <div className="meta-data">
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
            </div> */}
            <span className="index">{index + 1}</span>
          </div>
        );
      })}

      <ScrollToTopButton />
    </div>
  );
}

export default SpecificCard;
