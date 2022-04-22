import { useEffect, useState } from 'react'
import Card from '../component/Card';
import { getBooks } from '../service/google-api';

const BookPage = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [searchText, setSearchText] = useState<string>("search+terms");
    const [books, setBooks] = useState<any[]>([]);
    useEffect(() => {
        let isUnmounted = false;
        getBooks(searchText)
          .then((response) => {
            if (!isUnmounted) {
                setBooks(response)
            }
          })
          .finally(() => {

          });
        return () => {
          isUnmounted = true;
        };
      }, [searchText]);
    return (
        <div className='card-container'>
            {books.map((obj)=>  <Card key={obj.id} title={obj.volumeInfo.title} image={obj.volumeInfo.imageLinks.smallThumbnail} /> )}
        </div>
    )
}

export default BookPage