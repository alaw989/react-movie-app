import React, { Component } from "react";

const MovieRelease = props => {
  let release = "2000-01-12"
    ? (release = "2000-01-12")
    : (release = props.movie[0].release_date);

  return (
  <div className="ReleaseDate">
    <h4>Original Release</h4>
    <p className="Movie-date">{release}</p>
  </div>
  )
};

export default MovieRelease;
