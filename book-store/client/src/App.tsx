import Navbar from "./components/Navbar";
import {lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";

const Home = lazy(() => import('./pages/Home'))
const Books = lazy(() => import('./pages/Books'))
const Book = lazy(() => import('./components/Book'))
const Signup = lazy(() => import('./pages/Signup'))
const Login = lazy(() => import('./pages/Login'))
const Page = lazy(() => import('./pages/Page'))

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
          <Route path="/page" element={<Suspense><Page /></Suspense>}></Route>
          <Route path="/signup" element={<Suspense><Signup /></Suspense>}></Route>
          <Route path="/login" element={<Suspense><Login /></Suspense>}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
