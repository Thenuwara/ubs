import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { BOOK_INFO_PAGE, BOOK_PAGE, MOVIE_INFO_PAGE, MOVIE_PAGE, NOT_FOUND_PAGE } from "../constant/page";
import { BOOK_INFO_PAGE_URL, BOOK_PAGE_URL, MOVIE_INFO_PAGE_URL, MOVIE_PAGE_URL, ROOT_URL } from "../constant/route-path";
import ComponentWrapper from "./ComponentWrapper";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path={ROOT_URL} element={<Navigate to={BOOK_PAGE_URL} />} />
      <Route path={BOOK_PAGE_URL} element={<ComponentWrapper page={BOOK_PAGE} />} />
      <Route path={BOOK_INFO_PAGE_URL} element={<ComponentWrapper page={BOOK_INFO_PAGE} />} />
      <Route path={MOVIE_PAGE_URL} element={<ComponentWrapper page={MOVIE_PAGE} />} />
      <Route path={MOVIE_INFO_PAGE_URL} element={<ComponentWrapper page={MOVIE_INFO_PAGE} />} />
      <Route path='*' element={<ComponentWrapper page={NOT_FOUND_PAGE}/>} />
    </Routes>
  </Router>
);
export default AppRouter;
