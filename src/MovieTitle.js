import React, { Component } from "react";

const MovieTitle = props => {
  let title;
  props.movie[0].title == null
    ? (title = "Next Friday")
    : (title = props.movie[0].title);
  // Be consistent with your classNames, MovieTitle-text is a mix of PascalCase and kabob-case.
  // I would recommend that you choose one and stick with it.
  return <h1 className="MovieTitle-text">{title.toUpperCase()}</h1>;
};

export default MovieTitle;
