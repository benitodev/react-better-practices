import React from "react";
import Form from "./Form";

const SearchingGifs = () => {
  return (
    <section>
      <article className="box-title">
        <h1 className="title">Giphy!</h1>
      </article>
      <article className="search-container">
        <Form />
      </article>
    </section>
  );
};

export default React.memo(SearchingGifs);
