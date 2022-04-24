import { useLocation, useNavigate } from "react-router-dom";
import { BOOK_PAGE_URL, MOVIE_PAGE_URL } from "../../constant/route-path";

const NavigationBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onClick = (url: string) => {
    navigate(url);
  };
  return (
    <div className="topnav">
      <div className="logo">
        <img src={window.location.origin + "/logo.png"} alt=""/>
        <h1> THE-NU </h1>
      </div>
      <div>
        <button className={pathname === BOOK_PAGE_URL ? "active" : ""} onClick={() => onClick(BOOK_PAGE_URL)}>
          Books
        </button>
        <button className={pathname === MOVIE_PAGE_URL ? "active" : ""} onClick={() => onClick(MOVIE_PAGE_URL)}>
          Movies
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
