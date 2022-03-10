import React from "react";
import { Link } from "react-router-dom";

const Trending = ({ id, title }) => {
  return (
    <span className="trending-item">
      <Link id={id} to={`trending/${title}`}>
        {title}
      </Link>
    </span>
  );
};

export default Trending;
