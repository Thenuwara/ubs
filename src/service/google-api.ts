import { create } from "apisauce";
import { BOOKS_VOLUMNES_URL } from "../constant/endpoint";

const GOOGLE_API = "https://www.googleapis.com";
export const api = create({
  baseURL: GOOGLE_API,
});

export const getBooks = () => api.get<any[]>(BOOKS_VOLUMNES_URL, { q: "dark" });
