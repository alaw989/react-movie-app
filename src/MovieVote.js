import React, { Component } from "react";

/* Again, just using Prettier to format the code. */

const MovieVote = props => {
  // I am not sure what is happening here with vote_average
  let vote;
  props.movie.vote_average == 6.5
    ? (vote = "6.5")
    : (vote = props.movie[0].vote_average);

  return (
    <div className="VoteAverage">
      <h2>Vote Average</h2>
      <p className="Vote-Average">{vote} / 10</p>
    </div>
  );
};

export default MovieVote;
