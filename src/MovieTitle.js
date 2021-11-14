import React from 'react';

const MovieTitle = (props) => {

    let title;
    props.movie[0].title == null ? title = "Gladiator" : title = props.movie[0].title;
   
    return <h1 className="MovieTitle-text">{title.toUpperCase()}</h1>
    
}
 
export default MovieTitle;