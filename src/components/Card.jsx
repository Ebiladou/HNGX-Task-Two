import React, { useState, useEffect } from "react";
import axios from "../services/BaseApi";
import "../App.css";

function Card() {
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("movie/top_rated", 
        {
          params: {
            page: 1,
          },
        });

        const topMoviesData = response.data.results.slice(0, 10);
        setTopMovies(topMoviesData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const rTomatoeRating = () => {
    return Math.floor(Math.random() * (90 - 70 + 1) + 70);
  };

  return (
    <div className="grid-container">
      {topMovies.map((movie, index) => (
        <div key={index} className="grid-card">
          <div className="card-container">
            <div className="movie">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="card-details">
              <p className="release-date">
                {new Date(movie.release_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h1 className="movie-title">{movie.title}</h1>
              <div className="card-ratings">
                <span>IMDb {movie.vote_average}</span>
                <span>Rotten Tomatoes {rTomatoeRating()}</span>
              </div>
              <p className="genre"></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
