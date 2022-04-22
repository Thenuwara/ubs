import { ApiResponse, create } from "apisauce";
import { TOP_MOVIES_URL } from "../constant/endpoint";


const IMDB_API = "https://imdb-api.com/en/API";
export const api = create({
    baseURL: IMDB_API,
  });
  
  export const getTopMovies = async () => {
    const response: ApiResponse<any[], any> = await api.get<any[]>(TOP_MOVIES_URL);
    debugger
    const { data } = response;
    if (response.ok) {
        console.log("ok", response)
      return data.items;
    } else {
      console.log("error")
      return [];
    }
  };