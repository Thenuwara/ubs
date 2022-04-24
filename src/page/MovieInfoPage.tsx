import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../component/movie-info-page/MovieInfo";
import { getTopMovies } from "../service/imdb-api";
import { AppDispatch } from "../store";
import { useAppDispatch } from "../store/hook";
import { resetState, setError } from "../store/slice/error-slice";

const MovieInfoPage = () => {
  const [movieInfo, setMovieInfo] = useState<any>();
  const { id } = useParams();
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    const getTopMovieByIdAsync = async (movieId: string | undefined) => {
      const response: any = await getTopMovies();
      if (response.ok) {
        const data = response.data.items;
        setMovieInfo(data.find((obj: { id: string }) => obj.id === movieId));
      } else {
        dispatch(
          setError({
            hasError: true,
            errorMessage: "Unable to find the movie info",
          })
        );
      }
    };

    dispatch(resetState());
    getTopMovieByIdAsync(id);
  }, [id, dispatch]);
  return <MovieInfo info={movieInfo} />;
};

export default MovieInfoPage;
