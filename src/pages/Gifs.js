import React from "react";
import { Link, useParams } from "react-router-dom";
import ListGifs from "components/ListGifs";
import useGif from "hooks/useGif";
import Logo from "components/Logo";

const Gifs = () => {
  const params = useParams();
  const { keyword } = params;
  const { gif, loader } = useGif();
  return (
    <section className="search-pages">
      <Link to="../">
        <h1 className="title">Giphy!</h1>
      </Link>
      {loader && <h1>LOADING!!!"!"!"!"!"</h1>}
      <h2 className="search-title">
        Search: <span>{keyword}</span>
      </h2>
      <section className="list-gifs">
        <ListGifs gifs={gif}></ListGifs>
      </section>
    </section>
  );
};

export default Gifs;
