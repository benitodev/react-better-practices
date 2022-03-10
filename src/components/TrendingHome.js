import React from "react";
import LazyTrending from "./LazyTrending";

const TrendingHome = () => {
  return (
    <section className="trending-home">
      <h2>Most popular gifs</h2>
      <LazyTrending></LazyTrending>
    </section>
  );
};

export default React.memo(TrendingHome);
