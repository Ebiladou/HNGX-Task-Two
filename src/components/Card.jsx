import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../services/BaseApi";
import "../App.css";
import imdbrate from '../assets/newimdb.png'
import tomatorate from '../assets/newtomato.png'
import Favourite from "./Favourite";

function Card() {
  const [topMovies, setTopMovies] = useState([]);
  const [error, setError] = useState(null);

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
        setError(null);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError("Could not load trending movies, please try again later.");
      }
    };

    fetchData();
  }, []);

  const rTomatoeRating = () => {
    return Math.floor(Math.random() * (90 - 70 + 1) + 70);
  };

  return (
    <div className="grid-container">
       {error ? (
        <div className="error-message">{error}</div> 
      ) : (
      topMovies.map((movie, index) => (
        <div key={index} className="grid-card">
          <div className="card-container" data-testid='movie-card'>
            <div className="movie">
            <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  data-testid= 'movie-poster'/> 
              </Link>
               <Favourite/>
            </div>
            <div className="card-details">
              <p className="release-date" data-testid= 'movie-release-date'>
                {new Date(movie.release_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h1 className="movie-title" data-testid= 'movie-title'>{movie.title}</h1>
              <div className="card-ratings">
                <span><img src={imdbrate} alt="ratings" /> {movie.vote_average}</span>
                <span><img src={tomatorate} alt="ratings" /> {rTomatoeRating()}</span>
              </div>
              <p className="genre"></p>
            </div>
          </div>
        </div>
      ))
      )}
    </div>
  );
}

export default Card;
