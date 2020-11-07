import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import ScrollToTopButton from "./ScrollToTopButton";
import Question from "./Question";
import MetaData from "./MetaData";

import "../stylesheets/SpecificCard.scss";

function Tag(props) {
  const [data, setData] = useState([]);
  const URL = `https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=${props.match.params.id}&site=${props.location.siteName}`;

  const history = useHistory();
  const siteName = props.match.params.id;

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

  function handleTagClick(tagName) {
    let path = `/specific/tag/${tagName}`;
    history.push({ pathname: path, siteName: siteName });
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
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
              answerCount={d.answerCount}
            />

            <div className="tag-holder">
              {d.tags.map((tag) => {
                return (
                  <div className="tags" onClick={() => handleTagClick(tag)}>
                    {tag}
                  </div>
                );
              })}
            </div>

            <MetaData
              theme={d.theme}
              viewCount={d.viewCount}
              answerCount={d.answerCount}
              ownerProfileLink={d.ownerProfileLink}
              ownerProfilePhoto={d.ownerProfilePhoto}
              ownerName={d.ownerName}
            />

            <span className="index">{index + 1}</span>
          </div>
        );
      })}

      <ScrollToTopButton />
    </div>
  );
}

export default Tag;
