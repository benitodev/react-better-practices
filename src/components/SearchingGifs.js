import React from "react";
import Form from "./Form";
import Logo from "./Logo";

const SearchingGifs = () => {
  return (
    <section>
      <article className="box-title">
        <Logo />
        <h1 className="search-title">Search the best gifs!</h1>
      </article>
      <article className="search-container">
        <Form />
      </article>
    </section>
  );
};

export default React.memo(SearchingGifs);
