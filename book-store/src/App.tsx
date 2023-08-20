import Books from "./components/Books";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Book from "./components/Book";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
// import useFetchData from "./useFetchData";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/books/:id" element={<Book />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
  // const {myData, isError} = useFetchData('https://jsonplaceholder.typicode.com/posts');

  // return (
  //   <>
  //     {isError != "" && <h1>{isError}</h1>}
  //     {
  //       myData ? (
  //         myData.slice(0,4).map((item) => {
  //           return (
  //             <div key={item.id}>
  //             <div className="grid grid-cols-3 gap-2">
  //               <h1 className="font-bold text-2xl ">{item.title}</h1>
  //               <p>{item.body}</p>
  //             </div>
  //             </div>
  //           )
  //         })
  //       ) : <p>Loading...</p>
  //     }
  //   </>
  // )
};

export default App;
