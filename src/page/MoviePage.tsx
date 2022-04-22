import { useEffect, useState } from "react";
import Card from "../component/Card";
import { getTopMovies } from "../service/imdb-api";

const MoviePage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    let isUnmounted = false;
    getTopMovies()
      .then((response) => {
        if (!isUnmounted) {
          setMovies(response);
        }
      })
      .finally(() => {});
    return () => {
      isUnmounted = true;
    };
  }, []);
  return (
    <div className='card-container'>
      {movies.map((obj) => (
        <Card key={obj.id} title={obj.title} image={obj.image} />
      ))}
    </div>
  );
};

export default MoviePage;
