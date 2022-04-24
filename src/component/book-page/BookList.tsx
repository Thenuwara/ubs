import { useNavigate } from "react-router-dom";
import { BOOK_INFO_PAGE_URL } from "../../constant/route-path";
import { IBook } from "../../model/Book";
import Card from "../common/Card";

const BookList = (props: { books: IBook[] }) => {
    const navigate = useNavigate();
  const { books } = props;
  const onClick =(id?: string) => {
    navigate(BOOK_INFO_PAGE_URL.replace(":id", id!!));
  }
  return (
    <>
      {books.map((obj: IBook) => (
        <Card key={obj.id} id={obj.id} onClick ={() => onClick(obj.id)} title={obj?.volumeInfo?.title} image={obj?.volumeInfo?.imageLinks.smallThumbnail} />
      ))}
    </>
  );
};

export default BookList;
