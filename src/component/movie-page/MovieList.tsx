import { useNavigate } from "react-router-dom";
import { MOVIE_INFO_PAGE_URL } from "../../constant/route-path";
import Card from "../common/Card";

const MovieList = (props: { movies: any; }) => {
  const navigate = useNavigate();
  const { movies } = props;
  const onClick = (id: string) => {
    navigate(MOVIE_INFO_PAGE_URL.replace(":id", id));
  };
  return (
    <>
      {movies.map((obj: { id: string; title: string; image: string; }) => (
        <Card key={obj.id} id={obj.id} onClick ={() => onClick(obj.id)} title={obj.title} image={obj.image} />
      ))}
    </>
  );
};

export default MovieList;
