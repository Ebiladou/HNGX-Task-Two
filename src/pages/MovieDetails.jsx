import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../services/BaseApi";

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
    <div>
      <h1>{movieDetails.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p>{movieDetails.runtime} mins</p>
      <p>{movieDetails.overview}</p>
    </div>
  );
}

export default MovieDetails;