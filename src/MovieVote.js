import React, { Component } from 'react';

const MovieVote = (props) => {

    let vote; 
    props.movie.vote_average == 6.5 ? (vote = "6.5") : (vote = props.movie[0].vote_average);

    return (
        <div className="VoteAverage">
          <h2>Vote Average</h2>
          <p className="Vote-Average">{vote} / 10</p>
        </div>
        )

    
}
 
export default MovieVote;