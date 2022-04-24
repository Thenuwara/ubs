import { useEffect, useState } from "react";
import { getBooks } from "../service/google-api";
import { useParams } from "react-router-dom";
import BookInfo from "../component/book-info-page/BookInfo";
import { Book } from "../model/Book";
import Spinner from "../component/common/Spinner";

const BookInfoPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [bookInfo, setBookInfo] = useState<any>(new Book());
  const { id } = useParams();

  useEffect(() => {
    let isUnmounted = false;
    setLoading(true);
    getBooks()
      .then((response) => {
        if (!isUnmounted) {
          setBookInfo(response.find((obj: { id: string }) => obj.id === id));
        }
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      isUnmounted = true;
    };
  }, [id]);
  return (
    <>
      <BookInfo info={bookInfo} />
      <Spinner loading={loading} />
    </>
  );
};

export default BookInfoPage;
