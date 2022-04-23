import { useEffect, useState } from "react";
import Spinner from "../component/common/Spinner";
import MovieList from "../component/movie-page/MovieList";
import { getTopMovies } from "../service/imdb-api";

const MoviePage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    let isUnmounted = false;
    setLoading(true);
    getTopMovies()
      .then((response) => {
        if (!isUnmounted) {
          setMovies(response);
        }
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      isUnmounted = true;
    };
  }, []);
  return (
    <div className="card-container">
      <MovieList movies={movies} />
      <Spinner loading={loading} />
    </div>
  );
};

export default MoviePage;
