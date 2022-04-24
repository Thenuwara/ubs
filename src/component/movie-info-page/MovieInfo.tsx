import { IMovie } from "../../model/Movie";
import Data from "../common/Data";
import InfoWrapper from "../common/InfoWrapper";

const MovieInfo = (props: { info: IMovie }) => {
  const { info } = props;
  return (
    <>
      {InfoWrapper(
        "Movie",
        info?.fullTitle,
        info?.image,
        <div>
          <Data lable={"Title"} value={info?.title} />
          <Data lable={"Year"} value={info?.year} />
          <Data lable={"IMDB Rating"} value={info?.imDbRating} />
          <Data lable={"IMDB Rating Count"} value={info?.imDbRatingCount} />
          <Data lable={"Rank"} value={info?.rank} />
          <Data lable={"Crew"} value={info?.crew} />
        </div>
      )}
    </>
  );
};

export default MovieInfo;
