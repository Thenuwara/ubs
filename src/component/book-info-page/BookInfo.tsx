import { IBook } from "../../model/Book";
import Data from "../common/Data";
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
          <Data lable={"Description"} value={volumeInfo?.description}/>
          <Data lable={"Published Date"} value={volumeInfo?.publishedDate}/>
          <Data lable={"Publisher"} value={volumeInfo?.publisher}/>
          <Data lable={"Categories"} value={volumeInfo?.categories}/>
          <Data lable={"Authors"} value={volumeInfo?.authors}/>          
        </div>
      )}
    </>
  );
};

export default BookInfo;
