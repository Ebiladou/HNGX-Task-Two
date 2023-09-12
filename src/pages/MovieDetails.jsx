import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../services/BaseApi";
import Sidebar from "./Sidebar";

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
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <h1 data-testid = 'movie-title'>{movieDetails.title}</h1>
      <p data-testid = 'movie-release-date'>{movieDetails.releasedate}</p>
      <p data-testid = 'movie-runtime'>{movieDetails.runtime} mins</p>
      <p data-testid = 'movie-overview'>{movieDetails.overview}</p>
    </div>
  );
}

export default MovieDetails;