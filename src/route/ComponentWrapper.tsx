import { useNavigate } from "react-router-dom";
import loadable from "@loadable/component";
import { BOOK_PAGE_URL, MOVIE_PAGE_URL } from "../constant/route-path";

const ComponentWrapper = (props: { page: string }) => {
  const { page, ...rest } = props;
  const Component = loadable(() => import("../page/" + page));
  const navigate = useNavigate();

  const onClick = (url: string) => {
    navigate(url);
  };
  return (
    <div>
      <div className="header">Header Title</div>
      <div className="topnav">
        <button onClick={() => onClick(BOOK_PAGE_URL)}>Books</button>
        <button onClick={() => onClick(MOVIE_PAGE_URL)}>Movies</button>
      </div>
      <>
        <Component {...rest} />
      </>
    </div>
  );
};

export default ComponentWrapper;
