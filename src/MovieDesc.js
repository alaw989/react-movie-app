import React, { Component } from "react";
import { pathOr } from "ramda";

const DEFAULT_DESCRIPTION =
  "Ice Cube returns as Craig Jones, a streetwise man from South Central Los Angeles who has a knack for getting into trouble." +
  "This time out, Craig is still trying to outsmart neighborhood bully Debo (Tommy 'Tiny' Lister Jr.); " +
  "after Craig gets the better of Debo in a fist fight, Debo is determined to flatten Craig in a rematch. Looking to stay out of Debo's way," +
  "Craig's dad decides that it would be a good idea for Craig to hide out with his Uncle Elroy and cousin Day-Day in Rancho Cucamonga... but trouble seems to find him there also.";

const MovieDesc = props => {
  const desc = pathOr(DEFAULT_DESCRIPTION, ["movie", "0", "overview"], props);
  return <p className="MovieTitle-desc">{desc}</p>;
};

export default MovieDesc;
