import { URL_API, KEY_API } from "keys/apiGif";
const getGif = (keyword = "random", offset = 0, limit = 20) => {
  let url = `${URL_API}/search?api_key=${KEY_API}&q=${keyword}&offset=${
    offset * limit
  }`;
  url += limit ? `&limit=${limit}` : "";
  return fetch(url)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject({
            err: true,
            status: res.status,
          })
    )
    .then((json) => json.data);
};
export default getGif;
