import React from "react";
import GifItem from "../Item/index.js";
import './style.css';

const GifList = ({ gifs }) => (
  <section className="gifs__list">
    {gifs.map((gif) => (
      <GifItem key={gif.id} gif={gif} />
    ))}
  </section>
);

export default GifList;
