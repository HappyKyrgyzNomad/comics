import React from "react";
import Skeleton from "react-loading-skeleton";

import "./charactersGrid.css";
import Abyss from "../../media/abyss.jpg";

const CharactersGrid = () => {
  return (
    <div className="main">
      <span className="characters ch--1">
        <img className="skeleton" src={Abyss}></img>
        <h3 className="charactersName">ABYSS</h3>
      </span>
      <span className="characters ch--2">
        <img src={Abyss}></img>
        <h3 className="charactersName">ABYSS</h3>
      </span>
      <span className="characters ch--2">
        <img src={Abyss}></img>
        <h3 className="charactersName">ABYSS</h3>
      </span>
      <span className="characters ch--3">
        <img src={Abyss}></img>
        <h3 className="charactersName">ABYSS</h3>
      </span>
      <span className="characters ch--4">
        <img src={Abyss}></img>
        <h3 className="charactersName">ABYSS</h3>
      </span>
      <span className="characters ch--5">
        <img src={Abyss}></img>
        <h3 className="charactersName">ABYSS</h3>
      </span>
      <span className="characters ch--6">
        <img src={Abyss}></img>
        <h3 className="charactersName">ABYSS</h3>
      </span>
      <span className="characters ch--7">
        <img src={Abyss}></img>
        <h3 className="charactersName">ABYSS</h3>
      </span>
      <span className="characters ch--8">
        <img src={Abyss}></img>
        <h3 className="charactersName">ABYSS</h3>
      </span>
    </div>
  );
};
export default CharactersGrid;
