import { booksData } from "../data/booksData";
import { NavLink } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
const Books = () => {
  return (
    <div className="bg-gray-200 grid content-center md:grid-cols-2 lg:grid-cols-3">
    {booksData.map((book) => (
            <Zoom>
              <NavLink key={book.id} to={`/books/${book.id}`}>
                <div className="rounded-lg bg-white p-2 m-auto my-4 card-shadow w-80 cursor-pointer hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
                  <div className="w-full h-96 mx-auto">
                    <img className="rounded-lg w-full h-full"
                      src={book.coverImage}
                      alt={book.title}
                    />
                  </div>
                  <div>
                    <h1 className="font-bold capitalize text-xl mt-2">
                      {book.title}
                    </h1>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-light italic">{book.author}</h3>
                  </div>
                  <div className="mb-2">
                    <p className="text-justify">
                      {book.description.substring(0, 120)}...
                    </p>
                  </div>
                </div>
              </NavLink>
            </Zoom>
            ))}
    </div>
  )
}

export default Books;