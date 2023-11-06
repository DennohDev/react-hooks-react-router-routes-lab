import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <div>
        {directors[0].name}
        <ul>
          <li>{directors[0].movies[0]}</li>
          <li>{directors[0].movies[1]}</li>
          <li>{directors[0].movies[2]}</li>
        </ul>
      </div>
      <div>
        {directors[1].name}
        <ul>
          <li>{directors[1].movies[0]}</li>
          <li>{directors[1].movies[1]}</li>
          <li>{directors[1].movies[2]}</li>
        </ul>
      </div>
      <div>
        {directors[2].name}
        <ul>
          <li>{directors[2].movies[0]}</li>
          <li>{directors[2].movies[1]}</li>
          <li>{directors[2].movies[2]}</li>
        </ul>
      </div>
    </div>
  );
}

export default Directors;
