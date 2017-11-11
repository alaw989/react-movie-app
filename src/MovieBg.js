import React, { Component } from "react";
import "./MovieBg.css";


const MovieBg = (props) => {
  const backdrop = props.movie[0].backdrop_path;
 

  let url;
  props.movie[0].backdrop_path == "/gMCKSic0my5n5ovqJU7fjMC0tD.jpg"
    ? (url = "https://image.tmdb.org/t/p/w1280/gMCKSic0my5n5ovqJU7fjMC0tD.jpg")
    : (url = `https://image.tmdb.org/t/p/w1280/${backdrop}`);

  return (
    <div className="MovieBg">
    <img src={url}/>
    </div>
  );
};

export default MovieBg;
