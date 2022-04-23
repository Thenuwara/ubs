import { useNavigate } from "react-router-dom";
import { BOOK_INFO_PAGE_URL } from "../../constant/route-path";
import Card from "../Card";

const BookList = (props: { books: any }) => {
    const navigate = useNavigate();
  const { books } = props;
  const onClick =(id: string) => {
    navigate(BOOK_INFO_PAGE_URL.replace(":id", id));
  }
  return (
    <>
      {books.map((obj: { id: string; volumeInfo: { title: string; imageLinks: { smallThumbnail: string } } }) => (
        <Card key={obj.id} onClick ={() => onClick(obj.id)} title={obj.volumeInfo.title} image={obj.volumeInfo.imageLinks.smallThumbnail} />
      ))}
    </>
  );
};

export default BookList;
