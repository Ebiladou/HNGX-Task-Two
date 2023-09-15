import React, {useState, useEffect} from "react";
import axios from "../services/BaseApi";

function Searchresult() {

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
  const handleSearch = async (query) => {
    setIsLoading(true);
    try {
      const response = await axios.get("/search/movie", {
        params: {
          query: query,
        },
      });

      setSearchResults(response.data.results);
      
    } catch (error) {
      setError("An error occured, try again later");
      console.error("Error searching for movies:", error);
    } finally {
      setIsLoading(false);
    }
  };
}, []);

  return (
    <div className="searchresult-container">
      <div className="movie-list">
        {searchResults.map((movie) => (
          <div key={movie.id} className="movie-result">
            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default Searchresult;