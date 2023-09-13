import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../services/BaseApi";
import Sidebar from "./Sidebar";
import Rect from '../assets/Rect.png'
import Play from '../assets/Play.png'

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`movie/${movieId}`);
        setMovieDetails(response.data);
        setError(null)
      } catch (error) {
        console.error("Error fetching movie details: ", error);
        setError("Failed to fetch movie details, please try again later.");
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className="details-container">
      <Sidebar />
      <div className="movie-details">
      {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <>
        <div className="image-div">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div className="trailer">
            <div className="play-icon">
              <img src={Play} alt="Play icon" />
            </div>
            <h1>Watch Trailer</h1>
          </div>
        </div>

        <div className="flex-details">
          <h1 data-testid="movie-title">{movieDetails.title}</h1>
          <p data-testid="movie-release-date">{new Date (movieDetails.release_date).toUTCString()}</p>
          <p data-testid="movie-runtime">{movieDetails.runtime} mins</p>
        </div>
        <div className="more-info">
          <div className="description">
             <p data-testid="movie-overview">{movieDetails.overview}</p>
             <p>Directors: <span>Eric Thomas</span></p>
            <p>Writers: <span>Luc Rice, Declan Don, Piers</span></p>
            <p>Stars: <span>Daemon, Lucas, Lois</span></p> 
            <div className="bg-top">
            <p>Top rated movies #67</p>
            <p>Awards 9 nominations</p>
          </div>
          </div>
         
          
          <div className="image-stack">
          <p>See Showtime</p>
          <p>More Watch Options</p>
          <div className="image-s">
            <img src={Rect} alt="poster" />
          </div>
        </div>
        </div>
        </>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
