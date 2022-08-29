import React from "react";
import { useState, useEffect } from "react";

const baseUrl =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=DIN2LqZSvDFA6wZiCUzAPDNeMH7Ajt3X";

function FetchMovieFunction() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setMovie(data.results))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="main ">
      <h1 style={{ marginBottom: "7%", textAlign: "center" }}>
        Movie Review - Fetch Function Component
      </h1>
      <div className="review-cards">
        {movie.map((movie, id) => {
          return (
            <div key={movie.id} className=" card">
              <img src={movie.multimedia?.src} alt="" className="card-img" />
              <div className="card-details" key={movie.id}>
                <h3> {movie.display_title}</h3>
                <p className="text">{movie.headline}</p>
                <hr />
                <div className="footer">
                  <span>
                    Critics Pick -
                    <span className="badge"> {movie.critics_pick} </span>{" "}
                  </span>
                  <span>{movie.byline} </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FetchMovieFunction;
