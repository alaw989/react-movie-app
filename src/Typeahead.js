import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

/*
There are spaces in here that probably shouldn't be. It's not a big
deal but just a small detail. Also indention is a little off as you will see with line 9.
Start using Prettier, it's a JavaScript code formatter. It allows you to format your code on save
so you don't have to worry about these small details. I also use an extension
in VS Code called Trailing Spaces, which removes trailing spaces.

I don't really like using function expressions. I like to use function declarations instead because
I think it's easier to read. But that's just me.
*/

export default function MoviePost({ movie }) {
  const backdrop = movie[0].poster_path;
  const url = `https://image.tmdb.org/t/p/w1280/${backdrop}`;

  return (
    <div className="MoviePoster">
      <img src={url} />
    </div>
  );
}
