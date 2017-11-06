import React, { Component } from "react";
import { asyncContainer, Typeahead } from "react-bootstrap-typeahead";
import MoviePoster from "./MoviePoster";
import MovieTitle from "./MovieTitle.js";
import MovieDesc from "./MovieDesc.js";
import MovieBg from "./MovieBg.js";
import MovieRelease from "./MovieRelease.js";
import moviedblogo from "./powered-by-rectangle-green.svg"
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
          original_title: "Next Friday",
          overview:
            "Ice Cube returns as Craig Jones, a streetwise man from South Central Los Angeles who has a knack for getting into trouble. This time out, Craig is still trying to outsmart neighborhood bully Debo (Tommy 'Tiny' Lister Jr.); after Craig gets the better of Debo in a fist fight, Debo is determined to flatten Craig in a rematch. Looking to stay out of Debo's way, Craig's dad decides that it would be a good idea for Craig to hide out with his Uncle Elroy and cousin Day-Day in Rancho Cucamonga... but trouble seems to find him there also.",
          popularity: 8.689173,
          poster_path: "/zUzn6YBbnEhdIkqtf9w0xG58NMC.jpg",
          release_date: "2000-01-12",
          title: "Next Friday",
          vote_average: 6.5
        }
      ]
    };
    this.handleAction = this.handleAction.bind(this);
  }

  handleAction = event => {
    event.persist();
    if (event.key === "Enter") {
      fetch(urlForMovie(event.target.value))
        .then(data => data.json())
        .then(data => {
          let movie = data.results;
          const titles = [];
          movie.map(
            x => (x.title === event.target.value ? titles.push(x) : "")
          );
          console.log(titles);
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
          <img src={moviedblogo} class="InputContainer-logo"/>
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
              placeholder="Search Movie Title..."
              maxResults={5}
              emptyLabel="No Matches Found"
              searchText=""
              propText=""
              paginationText=""
              delay={300}
            />
          </div>
          <div className="ColumnContainer">
            <MoviePoster movie={this.state.movieData} />
            <div className="ContentContainer">
              <MovieTitle movie={this.state.movieData} />
              <MovieDesc movie={this.state.movieData} />
              <MovieRelease movie={this.state.movieData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
