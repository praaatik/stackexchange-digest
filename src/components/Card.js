import React from "react";
import "../stylesheets/Card.scss";
import { Link } from "react-router-dom";

function Card(props) {
  console.log(props);
  return (
    <div className={[props.class, "card"].join(" ")}>
      <p className="site-name">{props.siteName}</p>

      <br></br>
      <a href={props.link} target="_blank" rel="noreferrer" className="title">
        <div dangerouslySetInnerHTML={{ __html: props.title }}></div>
      </a>
      <Link to={`/specific/${props.siteName}`}>
        <div className="card--viewmore">View Questions</div>
      </Link>
    </div>
  );
}

export default Card;
