import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    <div>
      <p>{movies[0].title}</p>
      {movies[0].time}
      <ul>
        <li>{movies[0].genres[0]}</li>
        <li>{movies[0].genres[1]}</li>
        <li>{movies[0].genres[2]}</li>
      </ul>
    </div>
    <div>
      {movies[1].title}
      {movies[1].time}
      <ul>
        <li>{movies[1].genres[0]}</li>
        <li>{movies[1].genres[1]}</li>
        <li>{movies[1].genres[2]}</li>
        <li>{movies[1].genres[3]}</li>
        <li>{movies[1].genres[4]}</li>
      </ul>
    </div>
    <div>
      {movies[2].title}
      {movies[2].time}
      <ul>
        <li>{movies[2].genres[0]}</li>
        <li>{movies[2].genres[1]}</li>
        <li>{movies[2].genres[2]}</li>
        <li>{movies[2].genres[3]}</li>
        <li>{movies[2].genres[4]}</li>
      </ul>
    </div>
  </div>;
}

export default Movies