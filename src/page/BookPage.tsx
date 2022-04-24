import { useEffect, useState } from "react";
import BookList from "../component/book-page/BookList";
import Spinner from "../component/common/Spinner";
import { getBooks } from "../service/google-api";
import { AppDispatch } from "../store";
import { useAppDispatch } from "../store/hook";
import { resetState, setError } from "../store/slice/error-slice";

const BookPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [books, setBooks] = useState<any[]>([]);
  const dispatch: AppDispatch = useAppDispatch();


  useEffect(() => {
    const getBooksAsync = async () => {
      const response: any = await getBooks();
      if (response.ok) {
        setBooks(response.data.items);
      } else {
        dispatch(
          setError({
            hasError: true,
            errorMessage: "Unable to fetch list of books",
          })
        );
      }
      setLoading(false);
    };
    
    dispatch(resetState())
    setLoading(true);
    getBooksAsync();
  }, [dispatch]);
  return (
    <div className="card-container">
      <BookList books={books} />
      <Spinner loading={loading} />
    </div>
  );
};

export default BookPage;
