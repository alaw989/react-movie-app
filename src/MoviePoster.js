import React, { Component } from "react";
import styled from "styled-components";

/*
The future of CSS is now CSS-in-JS. One library that I like to use is called styled-components.
I am going to show you how to use it here because I think it will be valuable that you start using
it as soon as you can and move away from styling with CSS/SASS.
*/

const StyledMoviePoster = styled.div`max-width: 400px;`;

const MoviePoster = props => {
  const poster = props.movie[0].poster_path;

  let url;
  props.movie[0].poster_path == "/zUzn6YBbnEhdIkqtf9w0xG58NMC.jpg"
    ? (url = "https://image.tmdb.org/t/p/w1280/zUzn6YBbnEhdIkqtf9w0xG58NMC.jpg")
    : (url = `https://image.tmdb.org/t/p/w1280/${poster}`);

  return (
    <StyledMoviePoster>
      <img src={url} />
    </StyledMoviePoster>
  );
};

export default MoviePoster;
