import React, { useEffect, useState } from "react";
import getTrendingGif from "services/getTrendingGif";
import Trending from "./Trending";

const ListTrending = () => {
  const [trendingGifs, setTrendingGifs] = useState([]);
  useEffect(() => {
    getTrendingGif().then(setTrendingGifs);
  }, []);

  return (
    <article className="trending-list">
      <div className="trending-list-box">
        {trendingGifs.length > 0 &&
          trendingGifs.map((gif, id) => (
            <Trending key={id} id={id} title={gif}></Trending>
          ))}
      </div>
    </article>
  );
};
export default ListTrending;
