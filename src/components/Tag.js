import axios from "axios";
import React, { useState, useEffect } from "react";

function Tag(props) {
  const [data, setData] = useState([]);
  const URL = `https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=${props.match.params.id}&site=${props.location.siteName}`;

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
  }, []);

    console.log(data);
  return <div>{props.match.params.id}</div>;
}

export default Tag;
