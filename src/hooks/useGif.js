import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "context/SearchContext";
import getGif from "services/getGif";

const useGif = () => {
  const [page, setPage] = useState(0);
  const [loadingPage, setLoadingPage] = useState();
  const params = useParams();
  const { keyword } = params;

  const info = useContext(SearchContext);
  const { setGif, gif } = info[0];
  const { loader, setLoader } = info[1];
  const keywordValue = keyword || localStorage.getItem("gif") || "random";
  console.log(keyword || localStorage.getItem("gif") || "random");
  useEffect(() => {
    setLoader(true);
    getGif(keywordValue).then((data) => {
      setGif(data);
      setLoader(false);

      localStorage.setItem("gif", keywordValue);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywordValue]);

  useEffect(() => {
    if (!page) return;
    setLoadingPage(true);
    getGif(keywordValue, page).then((data) => {
      setGif((prevData) => prevData.concat(data));
      setLoadingPage(false);
    });
  }, [page]);

  return { gif, loader, loadingPage, setPage };
};

export default useGif;
