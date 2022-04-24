import { useEffect, useState } from "react";
import { getBooks } from "../service/google-api";
import { useParams } from "react-router-dom";
import BookInfo from "../component/book-info-page/BookInfo";
import { Book } from "../model/Book";
import { AppDispatch } from "../store";
import { useAppDispatch } from "../store/hook";
import { resetState, setError } from "../store/slice/error-slice";

const BookInfoPage = () => {
  const [bookInfo, setBookInfo] = useState<any>(new Book());
  const { id } = useParams();
  const dispatch: AppDispatch = useAppDispatch()
  
 
  useEffect(() => {
    const getBookByIdAsync = async (bookId: string | undefined) => {
      const response: any = await getBooks();
      if (response.ok) {
        const data = response.data.items
        setBookInfo(data.find((obj: { id: string }) => obj.id === bookId));
      } else {
        dispatch(
          setError({
            hasError: true,
            errorMessage: "Unable to find the book info",
          })
        );
      }
    };

    dispatch(resetState())
    getBookByIdAsync(id)
  }, [id, dispatch]);
  return (
      <BookInfo info={bookInfo} />
  );
};

export default BookInfoPage;
