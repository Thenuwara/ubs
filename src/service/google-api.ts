import { ApiResponse, create } from "apisauce";
import { BOOKS_VOLUMNES_URL } from "../constant/endpoint";

const GOOGLE_API = "https://www.googleapis.com";
export const api = create({
    baseURL: GOOGLE_API,
  });
  
  export const getBooks = async (search: string) => {
    const response: ApiResponse<any[], any> = await api.get<any[]>(BOOKS_VOLUMNES_URL,{q: search});
    const { data } = response;
    if (response.ok) {
        console.log("ok", response)
      return data.items;
    } else {
      console.log("error")
      return [];
    }
  };