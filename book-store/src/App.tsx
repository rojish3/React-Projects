import Navbar from "./components/Navbar";
import {lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Error from "./components/Error";

const Home = lazy(() => import('./components/Home'))
const Books = lazy(() => import('./components/Books'))
const Book = lazy(() => import('./components/Book'))
const UserForm = lazy(() => import('./components/UserForm'))
const Login = lazy(() => import('./components/Login'))


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
          <Suspense>
          <Home /></Suspense>}>

          </Route>
          <Route path="/books" element={<Suspense><Books /></Suspense>}></Route>
          <Route path="/books/:id" element={<Suspense><Book /></Suspense>}></Route>
          <Route path="/form" element={<Suspense><UserForm /></Suspense>}></Route>
          <Route path="/login" element={<Suspense><Login /></Suspense>}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
