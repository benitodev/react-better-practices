import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [inputSearch, setInputSearch] = useState();
  let navigate = useNavigate();
  const handleChange = (e) => setInputSearch(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.search.value = "";
    navigate(`search/${inputSearch}`);
  };
  return (
    <form id="searcher-gifs" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="look for the best kittens !"
        className="search"
        name="search"
        onChange={handleChange}
      />
      <button>search</button>
    </form>
  );
};

export default Form;
