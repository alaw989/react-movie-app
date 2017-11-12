import React, { Component } from 'react';

const MovieTitle = (props) => {

    let title;
    props.movie[0].title == null ? title = "Next Friday" : title = props.movie[0].title;
   
    return <h1 className="MovieTitle-text">{title.toUpperCase()}</h1>
    
}
 
export default MovieTitle;