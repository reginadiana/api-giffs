import React from "react";
import './style.css';

const GifItem = ({ gif }) => {
  return (
    <div className="gif__item">
      <img draggable="false" src={gif.images.downsized.url} alt="" />
    </div>
  );
};

export default GifItem;
