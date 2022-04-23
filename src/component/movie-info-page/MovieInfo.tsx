import { IMovie } from '../../model/Movie';
import InfoWrapper from '../common/InfoWrapper';

const MovieInfo = (props: { info: IMovie; }) => {
    const { info } = props;
    return (
      <>
        {InfoWrapper(
          "Movie",
          info?.fullTitle,
          info?.image,
          <div>
            <h2>Title</h2>
            {info?.title}
            <h2>Year</h2>
            {info?.year}
            <h2>IMDB Rating</h2>
            {info?.imDbRating}
            <h2>IMDB Rating Count</h2>
            {info?.imDbRatingCount}
            <h2>Rank</h2>
            {info?.rank}
            <h2>Crew</h2>
            {info?.crew}
            
          </div>
        )}
      </>
    );
  };

export default MovieInfo