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
        <Logo marginTop="20px" />
      </Link>
      {loader && <h1>LOADING!!!"!"!"!"!"</h1>}
      <h1>Search: {keyword}</h1>
      <section className="list-gifs">
        <ListGifs gifs={gif}></ListGifs>
      </section>
    </section>
  );
};

export default Gifs;
