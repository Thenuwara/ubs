import { useEffect, useState } from "react";
import Spinner from "../component/common/Spinner";
import MovieList from "../component/movie-page/MovieList";
import { getTopMovies } from "../service/imdb-api";
import { AppDispatch } from "../store";
import { useAppDispatch } from "../store/hook";
import { resetState, setError } from "../store/slice/error-slice";

const MoviePage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<any[]>([]);
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    const getTopMoviesAsync = async () => {
      const response: any = await getTopMovies();
      if (response.ok) {
        const data = response.data.items;
        setMovies(data);
      } else {
        dispatch(
          setError({
            hasError: true,
            errorMessage: "Unable to fetch list of movie",
          })
        );
      }
      setLoading(false);
    };

    dispatch(resetState());
    setLoading(true);
    getTopMoviesAsync();
  }, [dispatch]);
  return (
    <div className="card-container">
      <MovieList movies={movies} />
      <Spinner loading={loading} />
    </div>
  );
};

export default MoviePage;
