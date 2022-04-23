import { IBook } from "../../model/Book";
import InfoWrapper from "../common/InfoWrapper";

const BookInfo = (props: { info: IBook }) => {
  const { info } = props;
  const volumeInfo = info?.volumeInfo;
  return (
    <>
      {InfoWrapper(
        "Book",
        volumeInfo?.title,
        volumeInfo?.imageLinks?.thumbnail,
        <div>
          <h2>Description</h2>
          {volumeInfo?.description}
          <h2>Published Date</h2>
          {volumeInfo?.publishedDate}
          <h2>Publisher</h2>
          {volumeInfo?.publisher}
          <h2>Categories</h2>
          {volumeInfo?.categories}
          <h2>Authors</h2>
          {volumeInfo?.authors}
          
        </div>
      )}
    </>
  );
};

export default BookInfo;
