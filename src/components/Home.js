import React from "react";
import useGif from "hooks/useGif";
import ListGifs from "./ListGifs";
import SearchingGifs from "./SearchingGifs";

import ButtonNextPage from "./ButtonNextPage";
import TrendingHome from "./TrendingHome";

const Home = () => {
  const { gif, loader, setPage } = useGif();
  const handleClick = () => setPage((prevState) => prevState + 1);
  return (
    <>
      <section className="home">
        {loader && <h1>LOADING!!!!!</h1>}
        <SearchingGifs />
        <main>
          <div>
            {localStorage.getItem("gif") && <h2>Last wanted</h2>}
            <section className="list-gifs">
              {!loader && <ListGifs gifs={gif} />}
            </section>
            <ButtonNextPage handleClick={handleClick} />
          </div>
          <TrendingHome></TrendingHome>
        </main>
      </section>
    </>
  );
};

export default Home;
