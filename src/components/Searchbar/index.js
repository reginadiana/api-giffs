import React, { useState } from "react";
import { Input } from "antd";
import "./style.css";
const { Search } = Input;

const SearchBar = ({ onChangeSearch }) => {
  const [input, setInput] = useState("");

  /* Toda vez que o input for atualizado atualizamos
	 o estado e passamos um props para APP */
  const handleOnChange = (e) => {
    e.preventDefault();

    const value = e.target.value;

    setInput(value);
    onChangeSearch(value.replace(/\s/g, "+"));
  };

  return (
    <section className="search__bar">
      <Search
        value={input}
        size="large"
        placeholder="Search for some giff"
        onChange={handleOnChange}
      />
    </section>
  );
};

export default SearchBar;
