import { useParams } from "react-router-dom";
import { booksData } from "../data/booksData";
import { SingleBook } from "./SingleBook";

const Book = () => {
  const { id } = useParams();
  const book = booksData.find((book) => book.id == Number(id));
  return <>{book !== undefined && <SingleBook key={book.id} {...book} />}</>;
};

export default Book;
