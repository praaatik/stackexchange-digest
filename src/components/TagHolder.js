import React from "react";
import "../stylesheets/TagHolder.scss";

function TagHolder(props) {
  return (
    <div className="tag-holder">
      {props.tags.map((tag) => {
        return (
          <div className="tags" onClick={props.handleClick(tag)}>
            {tag}
          </div>
        );
      })}
    </div>
  );
}

export default TagHolder;
