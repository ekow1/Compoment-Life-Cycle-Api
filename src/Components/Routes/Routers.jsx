import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieClass from "../Axios/MovieClass";
import MovieFunction from "../Axios/MovieFunction";
import FetchMovieClass from "../Fetch/FetchMovieClass";
import FetchMovieFunction from "../Fetch/FetchMovieFunction";
import Navbar from "./Navbar";

function Routers() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieFunction />} />
        <Route path="axios-c" element={<MovieClass />} />
        <Route path="function-f" element={<FetchMovieFunction />} />
        <Route path="class-f" element={<FetchMovieClass />} />
      </Routes>
    </Router>
  );
}

export default Routers;
