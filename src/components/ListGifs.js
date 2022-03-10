import React from "react";
import Gif from "./Gif";

const ListGifs = ({ gifs }) => {
  return (
    <>
      {gifs.length > 0 &&
        gifs.map((item) => (
          <Gif
            key={item.id}
            id={item.id}
            url={item.images.downsized_medium.url}
            title={item.title}
          />
        ))}
    </>
  );
};

export default React.memo(ListGifs);
