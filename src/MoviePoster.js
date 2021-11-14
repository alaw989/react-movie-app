import React from "react";
import "./MoviePoster.css";
import posterimage from './img/poster.jpg';

const MoviePoster = (props) => {
  const poster = props.movie[0].poster_path;
  
  let url;
  props.movie[0].poster_path === "/zUzn6YBbnEhdIkqtf9w0xG58NMC.jpg"
    ? (url = posterimage)
    : (url = `https://image.tmdb.org/t/p/w1280/${poster}`);

  return (
    <div className="MoviePoster">
      <img alt="movie-poster" src={url} />
    </div>
  );
};

export default MoviePoster;
