import { useEffect, useState } from "react";
import BookList from "../component/book-page/BookList";
import Spinner from "../component/common/Spinner";
import { getBooks } from "../service/google-api";

const BookPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [books, setBooks] = useState<any[]>([]);
  useEffect(() => {
    let isUnmounted = false;
    setLoading(true)
    getBooks()
      .then((response) => {
        if (!isUnmounted) {
          setBooks(response);
        }
      })
      .finally(() => {
        setLoading(false)
      });
    return () => {
      isUnmounted = true;
    };
  }, []);
  return (
    <div className="card-container">
      <BookList books={books} />
      <Spinner loading={loading}/>
    </div>
  );
};

export default BookPage;
