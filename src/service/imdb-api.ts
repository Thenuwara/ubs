import { create } from "apisauce";
import { TOP_MOVIES_URL } from "../constant/endpoint";

const IMDB_API = "https://imdb-api.com/en/API";
export const api = create({
  baseURL: IMDB_API,
});

export const getTopMovies = async () => await api.get<any[]>(TOP_MOVIES_URL);
