import React, { Component } from 'react';
import { Typeahead } from "react-bootstrap-typeahead";

const MoviePoster = props => {
    const backdrop = props.movie[0].poster_path
   const url = `https://image.tmdb.org/t/p/w1280/${backdrop}`;
  
   return (
     <div className="MoviePoster">
       <img src={url} />
     </div>
   );
 };
 
export default MoviePoster;