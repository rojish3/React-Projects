import { useParams } from "react-router-dom";
import { booksData } from "../data/booksData";
import { SingleBook } from "./SingleBook";

const Book = () => {
  const { id } = useParams();

    const book = booksData.filter((book) => book.id == Number(id))
    // const { title, author } = book;

  return (
    <>
      {
        book.map((item) => (
          <SingleBook key={item.id} {...item} />
        ))
      }
    </>
  );
};

export default Book;
