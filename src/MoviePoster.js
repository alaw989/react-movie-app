import React, { Component } from "react";
import "./MoviePoster.css";

const MoviePoster = (props) => {
  const poster = props.movie[0].poster_path;
  
  let url;
  props.movie[0].poster_path == "/zUzn6YBbnEhdIkqtf9w0xG58NMC.jpg"
    ? (url = "https://image.tmdb.org/t/p/w1280/zUzn6YBbnEhdIkqtf9w0xG58NMC.jpg")
    : (url = `https://image.tmdb.org/t/p/w1280/${poster}`);

  return (
    <div className="MoviePoster">
      <img src={url} />
    </div>
  );
};

export default MoviePoster;
