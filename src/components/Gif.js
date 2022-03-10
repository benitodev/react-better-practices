import React from "react";

const Gif = ({ url, id, title }) => {
  return (
    <article id={id} className="gif-container">
      <h2>{title}</h2>
      <img src={url} alt={title} className="gif" loading="lazy" />
      <div className="gif-container-background"></div>
    </article>
  );
};

export default Gif;
