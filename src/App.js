import React, { useState, useEffect } from "react";
import SearchBar from "./components/Searchbar/index";
import GifList from "./components/Gif/List/index";
import Header from "./components/Header/index";

/* Lib para fazer chamadas API */
import request from "superagent";

const App = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    requestGifs("cake");
  }, [])

  const requestGifs = (term) => {
	const path = 'https://api.giphy.com';
	const key = '1YIx5yclZNTG6Ghrm95crUchAdaNwTxl';
    const url = `${path}/v1/gifs/search?q=${term}&api_key=${key}`;
    request.get(url, (err, res) => setGifs(res.body.data));
  };

  return (
    <>
      <Header />
      <div className="greeting">
        <SearchBar onChangeSearch={requestGifs} />
        <GifList gifs={gifs} />
      </div>
    </>
  );
};

export default App;
