import React, { Component } from "react";
import { asyncContainer, Typeahead } from "react-bootstrap-typeahead";
import MoviePoster from "./MoviePoster";
import MovieTitle from "./MovieTitle.js";
import MovieDesc from "./MovieDesc.js";
import MovieBg from "./MovieBg.js";
import MovieRelease from "./MovieRelease.js";
import MovieVote from "./MovieVote.js";
import moviedblogo from "./powered-by-rectangle-green.svg";

import "./App.css";

const AsyncTypeahead = asyncContainer(Typeahead);
const urlForMovie = movie =>
  `https://api.themoviedb.org/3/search/movie?api_key=7d2694a422ae0dca2d8b8711788d5c73&query=${movie}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { options: [] };
    this.state = {
      movieData: [
        {
          backdrop_path: "/gMCKSic0my5n5ovqJU7fjMC0tD.jpg",
          original_title: "Gladiator",
          overview:
            "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor. As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed. He escapes, but is captured by slave traders. Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
          popularity: 8.2,
          poster_path: "/zUzn6YBbnEhdIkqtf9w0xG58NMC.jpg",
          release_date: "2000-05-01",
          title: "Gladiator",
          vote_average: 6.5
        }
      ]
    };
    this.handleAction = this.handleAction.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = event => {
    let value = event.toString("");
    if (event.length > 0) {
      fetch(urlForMovie(value))
        .then(data => data.json())
        .then(data => {
          let movie = data.results;
          const titles = [];
          movie.map(x => (x.title === value ? titles.push(x) : ""));
          if (titles.length < 1) {
            return null;
          }
          this.setState({
            movieData: titles
          });
        });
    }
  };

  handleAction = event => {
    event.persist();
    const query = event.target.value;
    if (query === "") {
      return null;
    }
    if (event.key === "Enter") {
      fetch(urlForMovie(query))
        .then(data => data.json())
        .then(data => {
          let movie = data.results;
     
          const titles = [];
          movie.map(x => (x.title === query ? titles.push(x) : ""));
          if (titles.length < 1) {
            return null;
          }
          this.setState({
            movieData: titles
          });
        });
    }
  };

  render() {
    return (
      <div className="AppWrapper">
        <MovieBg movie={this.state.movieData} />
        <div className="App">
          <div className="InputContainer">
            <div className="LogoContainer">
              <img alt="movie-logo" src={moviedblogo} className="InputContainer-logo" />
            </div>
            <div className="TypeaheadContainer">
              <AsyncTypeahead
                onSearch={movie =>
                  fetch(urlForMovie(movie))
                    .then(data => data.json())
                    .then(data => {
                      let movie = data.results;
                      const titles = [];
                      movie.map(x => titles.push(x.title));
                      this.setState({
                        options: titles
                      });
                    })}
                options={this.state.options}
                onKeyDown={this.handleAction}
                onChange={this.handleClick}
                onActiveItemChange={this.active}
                placeholder="Search Movie Title..."
                maxResults={5}
                emptyLabel="No Matches Found"
                searchText=""
                propText=""
                paginationText=""
                delay={300}
              />
            </div>
          </div>
          <div className="ColumnContainer">
            <MoviePoster movie={this.state.movieData} />
            <div className="ContentContainer">
              <MovieTitle movie={this.state.movieData} />
              <MovieDesc movie={this.state.movieData} />
              <MovieRelease movie={this.state.movieData} />
              <MovieVote movie={this.state.movieData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
