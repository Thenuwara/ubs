import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../component/common/Spinner";
import MovieInfo from "../component/movie-info-page/MovieInfo";
import { getTopMovies } from "../service/imdb-api";

const MovieInfoPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [movieInfo, setMovieInfo] = useState<any>();
  const { id } = useParams();

  useEffect(() => {
    let isUnmounted = false;
    setLoading(true);
    getTopMovies()
      .then((response) => {
        if (!isUnmounted) {
          setMovieInfo(response.find((obj: { id: string }) => obj.id === id));
        }
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      isUnmounted = true;
    };
  }, [id]);
  return (
    <>
      <MovieInfo info={movieInfo} />
      <Spinner loading={loading} />
    </>
  );
};

export default MovieInfoPage;
