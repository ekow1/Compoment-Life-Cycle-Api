import React, { Component } from "react";

const baseUrl =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=DIN2LqZSvDFA6wZiCUzAPDNeMH7Ajt3X";

class FetchMovieClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
    };
  }
  componentDidMount() {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => this.setState({ movie: data.results }))
      .catch((err) => console.log(err.message));
  }
  render() {
    return (
      <div className="main ">
        <h1 style={{ marginBottom: "7%", textAlign: "center" }}>
          Movie Review - Fetch Class Component
        </h1>
        <div className="review-cards">
          {this.state.movie.map((movie, id) => {
            return (
              <div key={movie.id} className=" card">
                <img src={movie.multimedia?.src} alt="" className="card-img" />
                <div className="card-details">
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
}

export default FetchMovieClass;
