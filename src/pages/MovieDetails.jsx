import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../services/BaseApi";
import Sidebar from "./Sidebar";
import Rect from '../assets/Rect.png'

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`movie/${movieId}`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details: ", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className="details-container">
      <Sidebar />
      <div className="movie-details">
        <div className="image-div">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        </div>

        <div className="flex-details">
          <h1 data-testid="movie-title">{movieDetails.title}</h1>
          <p data-testid="movie-release-date">{movieDetails.releasedate}</p>
          <p data-testid="movie-runtime">{movieDetails.runtime} mins</p>
          <p data-testid="movie-genre">{movieDetails.genre}</p>
        </div>
        <div className="more-info">
          <div className="description">
             <p data-testid="movie-overview">{movieDetails.overview}</p>
             <p>Directors:</p>
            <p>Writers:</p>
            <p>Stars:</p> 
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
      </div>
    </div>
  );
}

export default MovieDetails;
