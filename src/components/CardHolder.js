import React from "react";

import "../stylesheets/CardHolder.scss";

import ScrollToTopButton from "./ScrollToTopButton";
import Card from "./Card";

function CardHolder(props) {
  return (
    <div className="cardholder">
      {props.sites.map((s, index) => {
        //extracting the classnames for the website name
        // ex - codereview.stackexchange.com would have a classname of "codereview"
        // in case it's just one word, like askubuntu, "w" would be empty and the classname would be "askubuntu"

        let w = s.substr(0, s.indexOf("."));
        return w === "" ? (
          <Card
            siteName={s}
            class={s}
            link={props.questions[index]}
            title={props.title[index]}
          ></Card>
        ) : (
          <Card
            siteName={s}
            class={w}
            link={props.questions[index]}
            title={props.title[index]}
          ></Card>
        );
      })}

      <ScrollToTopButton />
    </div>
  );
}

export default CardHolder;
