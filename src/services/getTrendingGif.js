import { KEY_API, URL_API_TRENDING } from "keys/apiGif";

const getTrendingGif = () => {
  let url = `${URL_API_TRENDING}/searches?api_key=${KEY_API}`;

  return fetch(url)
    .then((res) =>
      res.ok ? res.json() : Promise.reject({ err: true, status: res.status })
    )
    .then((json) => json.data)
    .catch((err) => console.log(err, "getTrendingError"));
};

export default getTrendingGif;
