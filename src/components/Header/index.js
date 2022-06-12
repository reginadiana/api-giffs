import React from "react";
import dunout from "../../assets/dunout.png";
import "./style.css";

const Header = () => {
  return (
    <header>
      <h1>ALL GIFS YOU WANT</h1>
      <h2>GIFS GIPHY</h2>
      <img
        src={dunout}
        className="dunout"
        alt="Dunout que gira"
        draggable="false"
      />
      <h2>
        SEACH HERE AND <span className="highlight"> HAVE FUN</span>
      </h2>
    </header>
  );
};

export default Header;
